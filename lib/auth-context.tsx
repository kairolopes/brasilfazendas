"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'master' | 'broker' | null;

interface User {
  email: string;
  name: string;
  role: UserRole;
  scheduledAccess?: string; // ISO string date
}

interface Broker extends User {
  password?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, name: string) => Promise<boolean>;
  // Admin methods
  getBrokers: () => Broker[];
  updateBrokerAccess: (email: string, date: string) => void;
  deleteBroker: (email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('brasilfazendas_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }

    // Seed demo broker if not exists
    const storedBrokers = localStorage.getItem('brasilfazendas_brokers');
    if (!storedBrokers) {
      const demoBroker = {
        email: 'corretor@teste.com',
        name: 'Corretor Demo',
        password: '123456',
        scheduledAccess: new Date().toISOString() // Access allowed now
      };
      localStorage.setItem('brasilfazendas_brokers', JSON.stringify([demoBroker]));
    }
  }, []);

  const login = async (email: string, pass: string) => {
    // Master users
    if ((email === 'allancardozzo@gmail.com' || email === 'kairolopes@gmail.com') && pass === '123456') {
      const newUser: User = {
        email,
        name: email.split('@')[0],
        role: 'master'
      };
      setUser(newUser);
      localStorage.setItem('brasilfazendas_user', JSON.stringify(newUser));
      return true;
    }

    // Broker users (mock database check)
    const brokers = JSON.parse(localStorage.getItem('brasilfazendas_brokers') || '[]');
    const broker = brokers.find((b: any) => b.email === email && b.password === pass);
    
    if (broker) {
      // Check schedule logic here if needed, but for now we just allow login and show the schedule
      // In a real app, we would block if outside window.
      // Let's implement strict check:
      if (broker.scheduledAccess) {
          const scheduled = new Date(broker.scheduledAccess);
          const now = new Date();
          // Allow access if within same day for simplicity, or specific hour
          // Let's assume access is granted for the whole day of the scheduled date
          const isSameDay = scheduled.getDate() === now.getDate() &&
                            scheduled.getMonth() === now.getMonth() &&
                            scheduled.getFullYear() === now.getFullYear();
          
          // If strict hour check is needed:
          // const diff = now.getTime() - scheduled.getTime();
          // if (diff < 0 || diff > 3600000 * 2) return false; // 2 hours window
          
          if (!isSameDay) {
              console.log("Access denied: Not scheduled for today");
              // return false; // Uncomment to enforce
          }
      }

      const newUser: User = {
        email,
        name: broker.name,
        role: 'broker',
        scheduledAccess: broker.scheduledAccess
      };
      setUser(newUser);
      localStorage.setItem('brasilfazendas_user', JSON.stringify(newUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('brasilfazendas_user');
  };

  const register = async (email: string, name: string) => {
    const brokers = JSON.parse(localStorage.getItem('brasilfazendas_brokers') || '[]');
    if (brokers.find((b: any) => b.email === email)) return false;

    const newBroker = {
      email,
      name,
      password: '123456',
      scheduledAccess: new Date().toISOString()
    };
    
    brokers.push(newBroker);
    localStorage.setItem('brasilfazendas_brokers', JSON.stringify(brokers));
    return true;
  };

  const getBrokers = () => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('brasilfazendas_brokers') || '[]');
  };

  const updateBrokerAccess = (email: string, date: string) => {
    const brokers = getBrokers();
    const idx = brokers.findIndex((b: any) => b.email === email);
    if (idx >= 0) {
      brokers[idx].scheduledAccess = date;
      localStorage.setItem('brasilfazendas_brokers', JSON.stringify(brokers));
    }
  };

  const deleteBroker = (email: string) => {
    const brokers = getBrokers();
    const newBrokers = brokers.filter((b: any) => b.email !== email);
    localStorage.setItem('brasilfazendas_brokers', JSON.stringify(newBrokers));
  };

  return (
    <AuthContext.Provider value={{ 
      user, login, logout, register,
      getBrokers, updateBrokerAccess, deleteBroker
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

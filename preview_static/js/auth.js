// Mock Auth System for Static Preview

const USERS = {
    'allancardozzo@gmail.com': { name: 'Allan', role: 'master', password: '123456' },
    'kairolopes@gmail.com': { name: 'Kairo', role: 'master', password: '123456' },
    'corretor@teste.com': { name: 'Corretor Demo', role: 'broker', password: '123456', scheduled: true }
};

function login(email, password) {
    const user = USERS[email];
    if (user && user.password === password) {
        localStorage.setItem('bf_user', JSON.stringify(user));
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem('bf_user');
    window.location.href = 'index.html';
}

function checkAuth(requiredRole = null) {
    const user = JSON.parse(localStorage.getItem('bf_user'));
    if (!user) {
        window.location.href = 'index.html';
        return null;
    }
    if (requiredRole && user.role !== requiredRole) {
        alert('Acesso não autorizado');
        window.location.href = 'dashboard.html';
        return null;
    }
    updateUserDisplay(user);
    return user;
}

function updateUserDisplay(user) {
    const display = document.getElementById('user-display');
    if (display) {
        display.innerText = `Olá, ${user.name} (${user.role === 'master' ? 'Admin' : 'Corretor'})`;
    }
    
    // Show Admin Link if master
    if (user.role === 'master') {
        const nav = document.getElementById('main-nav');
        if (nav && !document.getElementById('admin-link')) {
            const link = document.createElement('a');
            link.id = 'admin-link';
            link.href = 'admin.html';
            link.className = 'text-sm font-medium hover:text-green-700 mr-4';
            link.innerText = 'Painel Admin';
            nav.insertBefore(link, nav.firstChild);
        }
    }
}

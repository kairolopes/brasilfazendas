"use client"

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon in Leaflet with Next.js
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png'
const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'

const customIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

// Formoso do Araguaia coordinates
const CENTER: [number, number] = [-11.796, -49.53]
const ZOOM = 10

export default function MapComponent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-slate-800 flex items-center justify-center">
        <div className="text-slate-400 animate-pulse">Carregando mapa interativo...</div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={CENTER} 
        zoom={ZOOM} 
        scrollWheelZoom={true} 
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      >
        <LayersControl position="topright">
          {/* Base Layers */}
          <LayersControl.BaseLayer checked name="Satélite (Esri)">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Mapa Rodoviário (OSM)">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Terreno (Google)">
            <TileLayer
              url="http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}"
              attribution='&copy; Google'
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {/* Markers & Overlays */}
        <Marker position={CENTER} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <strong className="text-lg">Cooperformoso</strong><br/>
              Formoso do Araguaia - TO<br/>
              <span className="text-xs text-slate-500">Sede Administrativa</span>
            </div>
          </Popup>
        </Marker>

        <Circle 
          center={CENTER} 
          radius={5000} 
          pathOptions={{ color: '#10b981', fillColor: '#10b981', fillOpacity: 0.2 }} 
        />
        
        {/* BR-153 Aproximada (Exemplo Visual) */}
        {/* Na prática, usaria GeoJSON real, mas aqui apenas um marcador de referência */}
        <Marker position={[-11.6, -49.1]} icon={customIcon}>
           <Popup>Acesso BR-153 (Logística)</Popup>
        </Marker>

      </MapContainer>
      
      {/* Legenda Flutuante */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg z-[1000] text-slate-800 text-xs max-w-[200px]">
        <h4 className="font-bold mb-1">Legenda</h4>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>Sede Cooperformoso</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500/50 border border-emerald-500"></div>
          <span>Área de Influência (5km)</span>
        </div>
      </div>
    </div>
  )
}

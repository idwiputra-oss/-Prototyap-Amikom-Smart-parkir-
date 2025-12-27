
import React, { useState } from 'react';
import { 
  Bell, 
  Settings, 
  Menu, 
  AlertTriangle,
  History,
  CreditCard,
  MapPin,
  User
} from 'lucide-react';
import ParkingStatus from './components/ParkingStatus';
import VehicleCard from './components/VehicleCard';
import QRSection from './components/QRSection';
import AIAssistant from './components/AIAssistant';
import { Vehicle, ParkingSlot } from './types';

const App: React.FC = () => {
  const [registeredVehicles] = useState<Vehicle[]>([
    {
      id: '1',
      type: 'motorcycle',
      name: 'Honda Vario 150',
      plateNumber: 'BN 4496 XE',
      isVerified: true,
    }
  ]);

  const [parkingSlots] = useState<ParkingSlot>({
    location: 'Basement Gedung 4',
    total: 150,
    available: 45
  });

  return (
    <div className="min-h-screen pb-32">
      {/* App Bar */}
      <header className="sticky top-0 z-40 bg-purple-800 text-white shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white/20 rounded-lg">
            <Menu size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Amikom Smart Parking</h1>
            <p className="text-[10px] opacity-70 uppercase tracking-widest">Dashboard Mahasiswa</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-purple-800 rounded-full"></span>
          </div>
          <div className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
            <Settings size={22} />
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 lg:p-6 space-y-6">
        {/* Welcome Section */}
        <section className="mt-2">
          <h2 className="text-gray-400 text-sm font-medium">Selamat Datang,</h2>
          <p className="text-2xl font-bold text-gray-800">Imam Dwi Putra</p>
        </section>

        {/* Parking Status */}
        <ParkingStatus slot={parkingSlots} />

        {/* Vehicles Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-800">Kendaraan Terdaftar</h3>
            <button className="text-purple-600 text-sm font-semibold hover:underline">Tambah Baru</button>
          </div>
          <div className="space-y-3">
            {registeredVehicles.map(v => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </section>

        {/* QR Section */}
        <QRSection />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-purple-200 hover:bg-purple-50 transition-all gap-2 group">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors">
              <History size={20} />
            </div>
            <span className="text-xs font-bold text-gray-600">Riwayat</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-purple-200 hover:bg-purple-50 transition-all gap-2 group">
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600 group-hover:bg-orange-200 transition-colors">
              <MapPin size={20} />
            </div>
            <span className="text-xs font-bold text-gray-600">Lokasi</span>
          </button>
        </div>

        {/* Help Button */}
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-red-600 text-white rounded-2xl font-bold shadow-xl shadow-red-100 hover:bg-red-700 active:scale-[0.98] transition-all mt-8">
          <AlertTriangle size={20} />
          Bantuan Darurat Parkir
        </button>
      </main>

      {/* Floating Smart AI Assistant */}
      <AIAssistant />

      {/* Navigation Bar (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex justify-around items-center z-40 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col items-center gap-1 text-purple-600">
          <div className="bg-purple-100 p-2 rounded-xl"><CreditCard size={20} /></div>
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <History size={20} />
          <span className="text-[10px] font-bold">Logs</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <MapPin size={20} />
          <span className="text-[10px] font-bold">Map</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <User size={20} />
          <span className="text-[10px] font-bold">Profil</span>
        </div>
      </nav>
    </div>
  );
};

export default App;


import React from 'react';
import { LayoutDashboard } from 'lucide-react';
import { ParkingSlot } from '../types';

interface Props {
  slot: ParkingSlot;
}

const ParkingStatus: React.FC<Props> = ({ slot }) => {
  const percentage = (slot.available / slot.total) * 100;
  
  return (
    <div className="bg-purple-50 rounded-2xl p-6 shadow-sm border border-purple-100 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-purple-600 text-sm font-semibold flex items-center gap-2">
            <LayoutDashboard size={16} />
            Ketersediaan Slot
          </p>
          <h2 className="text-xl font-bold text-purple-900 mt-1">{slot.location}</h2>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-purple-700">{slot.available}</span>
          <span className="text-purple-400 font-medium"> / {slot.total}</span>
        </div>
      </div>
      
      <div className="w-full bg-purple-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out ${percentage < 20 ? 'bg-red-500' : 'bg-purple-600'}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-xs text-purple-500 mt-2 font-medium">
        {percentage < 20 ? 'Parkir hampir penuh!' : 'Banyak slot tersedia'}
      </p>
    </div>
  );
};

export default ParkingStatus;

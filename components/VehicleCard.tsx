
import React from 'react';
import { Bike, Car, CheckCircle2 } from 'lucide-react';
import { Vehicle } from '../types';

interface Props {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<Props> = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
        {vehicle.type === 'motorcycle' ? <Bike size={28} /> : <Car size={28} />}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{vehicle.name}</h3>
        <p className="text-sm text-gray-500 font-mono">{vehicle.plateNumber}</p>
      </div>
      {vehicle.isVerified && (
        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <CheckCircle2 size={14} />
          Terverifikasi
        </div>
      )}
    </div>
  );
};

export default VehicleCard;


import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { RefreshCcw, Info } from 'lucide-react';

const QRSection: React.FC = () => {
  const [token, setToken] = useState('AMIKOM-PARK-' + Math.random().toString(36).substring(7).toUpperCase());
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setToken('AMIKOM-PARK-' + Math.random().toString(36).substring(7).toUpperCase());
          return 45;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center py-8 bg-white rounded-3xl shadow-lg border border-gray-50 my-8">
      <div className="mb-6 text-center px-6">
        <h3 className="text-lg font-bold text-gray-800">Scan di Gerbang Keluar</h3>
        <p className="text-sm text-gray-400 mt-1">Arahkan QR ke scanner pada palang otomatis</p>
      </div>

      <div className="relative p-6 bg-purple-50 rounded-2xl border-4 border-purple-100">
        <QRCodeSVG 
          value={token} 
          size={200} 
          level="H" 
          includeMargin={false}
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-[2px] rounded-2xl cursor-pointer">
           <RefreshCcw className="text-purple-600 animate-spin-slow" size={48} />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-gray-600">{token}</span>
        </div>
        <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
          Token diperbarui dalam <span className="font-bold text-purple-600">{timeLeft}s</span>
        </p>
      </div>
      
      <div className="mt-6 mx-6 p-4 bg-blue-50 rounded-xl flex items-start gap-3">
        <Info className="text-blue-500 shrink-0 mt-0.5" size={18} />
        <p className="text-[11px] text-blue-700 leading-relaxed">
          QR Code ini bersifat dinamis. Pastikan layar ponsel Anda memiliki kecerahan yang cukup saat melakukan pemindaian.
        </p>
      </div>
    </div>
  );
};

export default QRSection;

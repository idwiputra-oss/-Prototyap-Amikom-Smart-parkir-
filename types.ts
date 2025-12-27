
export interface Vehicle {
  id: string;
  type: 'motorcycle' | 'car';
  name: string;
  plateNumber: string;
  isVerified: boolean;
}

export interface ParkingSlot {
  location: string;
  total: number;
  available: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

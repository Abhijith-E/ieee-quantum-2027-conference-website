import React from 'react';
import { Wifi, Coffee, Library, ShieldAlert, HeartPulse, Accessibility, ParkingCircle, TreePine, Navigation } from 'lucide-react';

export default function CampusFacilities() {
  const facilities = [
    { icon: <Wifi size={32} />, label: 'High-Speed Wi-Fi' },
    { icon: <Coffee size={32} />, label: 'Cafeteria & Dining' },
    { icon: <Navigation size={32} />, label: 'Prayer Rooms' },
    { icon: <HeartPulse size={32} />, label: 'First Aid Center' },
    { icon: <Accessibility size={32} />, label: 'Wheelchair Access' },
    { icon: <ParkingCircle size={32} />, label: 'Visitor Parking' },
    { icon: <ShieldAlert size={32} />, label: '24/7 Security' },
    { icon: <TreePine size={32} />, label: 'Green Spaces' },
    { icon: <Library size={32} />, label: 'Library Access' }
  ];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-24 mb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Campus Facilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The CHRIST University campus is fully equipped to provide a safe, accessible, and comfortable environment for all attendees.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {facilities.map((fac, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center hover:border-gold hover:shadow-md transition-all group cursor-default">
              <div className="text-navy mb-4 group-hover:text-gold transition-colors group-hover:scale-110 duration-300">
                {fac.icon}
              </div>
              <h4 className="font-bold text-slate-700 group-hover:text-navy text-sm md:text-base transition-colors">
                {fac.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

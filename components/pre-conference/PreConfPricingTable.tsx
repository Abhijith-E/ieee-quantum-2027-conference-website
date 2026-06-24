import React from 'react';

export default function PreConfPricingTable() {
  const pricingData = [
    { category: 'Student / Postdoc', price: '$150', description: 'Requires valid university ID' },
    { category: 'Academic / Faculty', price: '$300', description: 'Researchers and professors' },
    { category: 'Industry / Corporate', price: '$500', description: 'Corporate attendees' },
  ];

  return (
    <section className="w-full py-16 px-6 bg-slate-50 relative z-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Registration Fees</h2>
          <p className="text-slate-600 font-medium">
            Pre-conference masterclasses require a separate registration pass from the main conference.
            Fees cover the full day of instruction, materials, and CEU certification.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="pb-4 font-bold text-slate-500 uppercase tracking-widest text-sm w-1/2">Attendee Category</th>
                <th className="pb-4 font-bold text-slate-500 uppercase tracking-widest text-sm w-1/4">Details</th>
                <th className="pb-4 font-bold text-slate-500 uppercase tracking-widest text-sm w-1/4 text-right">Fee (USD)</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-5 font-bold text-navy text-lg">{row.category}</td>
                  <td className="py-5 text-slate-500 text-sm">{row.description}</td>
                  <td className="py-5 font-extrabold text-gold text-2xl text-right">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500 bg-slate-50 py-3 rounded-lg border border-slate-100">
          Registration will open on August 1st, 2027.
        </div>
      </div>
    </section>
  );
}

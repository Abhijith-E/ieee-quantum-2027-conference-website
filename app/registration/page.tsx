import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EarlyBirdBanner from '@/components/registration/EarlyBirdBanner';
import PricingSection from '@/components/registration/PricingSection';
import WhatsIncluded from '@/components/registration/WhatsIncluded';
import PreConfAddon from '@/components/registration/PreConfAddon';
import RegistrationSteps from '@/components/registration/RegistrationSteps';
import CancellationPolicy from '@/components/registration/CancellationPolicy';

export const revalidate = 3600;

export default function RegistrationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* Hero-ish header */}
      <section className="w-full bg-slate-50 pt-32 pb-16 relative z-10 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Conference Registration
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
            Secure your spot at the leading quantum technology conference. Early bird rates are available for a limited time.
          </p>
          <EarlyBirdBanner />
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20 pb-10">
        <PricingSection />
        <WhatsIncluded />
        <PreConfAddon />
      </section>

      {/* Registration Steps */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <RegistrationSteps />

        {/* CTA */}
        <div className="w-full max-w-md mx-auto px-6 mb-16 flex justify-center">
          <Link 
            href="/register"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-gold hover:bg-[#c4a132] text-white font-extrabold text-lg py-5 px-12 rounded-xl transition-all shadow-md hover:shadow-xl group"
          >
            Proceed to Registration 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <CancellationPolicy />
      </section>

    </main>
  );
}

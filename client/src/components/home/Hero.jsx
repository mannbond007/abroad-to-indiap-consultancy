import { ArrowRight, CheckCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80)",
        }}
      />

      {/* GRADIENT OVERLAY (for text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-white"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}
      >
        
        {/* LEFT CONTENT */}
        <div>
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm mb-6 border border-white/20">
            <Globe size={16} />
            Trusted International Admission Consultancy
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
            Study in India with
            <span className="block text-blue-300">
              Expert Admission Guidance
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl leading-relaxed">
            We help international students secure admissions in recognized
            Indian universities through a transparent, ethical, and fully
            guided process — from counselling to campus arrival.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-medium text-white hover:bg-blue-700 transition"
            >
              Start Free Counselling
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/admission-process"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-medium text-white hover:bg-white/10 transition"
            >
              View Admission Process
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-200">
            <TrustItem text="UGC & AICTE Approved Universities" />
            <TrustItem text="Transparent Fees & Ethical Counselling" />
            <TrustItem text="Dedicated Country-wise Support" />
            <TrustItem text="Visa & Travel Assistance" />
          </div>
        </div>

        {/* RIGHT – COUNTRY PANEL */}
        <div className="relative">
          <div className="rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl p-10">
            <h3 className="text-lg font-semibold text-white">
              Countries We Serve
            </h3>
            <p className="mt-1 text-sm text-gray-200">
              Personalized admission guidance for students from:
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <CountryCard name="Nepal" />
              <CountryCard name="Bangladesh" />
              <CountryCard name="UAE" />
              <CountryCard name="Qatar" />
              <CountryCard name="Oman" />
              <CountryCard name="South Africa" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function TrustItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle size={18} className="text-green-400 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function CountryCard({ name }) {
  return (
    <div className="group rounded-xl border border-white/30 bg-white/10 px-5 py-4 text-sm font-medium text-white shadow-md hover:shadow-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
      <div className="flex items-center justify-between">
        <span>{name}</span>
        <span className="opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition text-xs">
          →
        </span>
      </div>
    </div>
  );
}

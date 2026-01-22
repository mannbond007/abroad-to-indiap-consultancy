import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Study in India with
            <span className="text-blue-600"> Trusted Admission Guidance</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Helping international students secure admissions in top Indian
            colleges with transparent process, affordable fees, and complete
            visa support.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Free Counselling
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/admission-process"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              How It Works
            </Link>
          </div>

          {/* TRUST POINTS */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TrustItem text="UGC & AICTE Approved Colleges" />
            <TrustItem text="Affordable Fees & Transparent Process" />
            <TrustItem text="Dedicated Counselling Support" />
            <TrustItem text="Visa & Travel Assistance" />
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Countries We Serve
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3 text-gray-700">
              <CountryItem name="Nepal" />
              <CountryItem name="Bangladesh" />
              <CountryItem name="UAE" />
              <CountryItem name="Qatar" />
              <CountryItem name="Oman" />
              <CountryItem name="South Africa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small Reusable Pieces ---------- */

function TrustItem({ text }) {
  return (
    <div className="flex items-start gap-2 text-sm text-gray-700">
      <CheckCircle size={18} className="text-green-600 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function CountryItem({ name }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
      {name}
    </div>
  );
}

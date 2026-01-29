import { ArrowRight, CheckCircle, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ---------- FLAG-INSPIRED COLOR MAP ---------- */
const countryColors = {
  Nepal: "text-red-400",
  Bangladesh: "text-green-400",
  "United Arab Emirates": "text-emerald-400",
  Qatar: "text-purple-400",
  Oman: "text-rose-400",
  "Saudi Arabia": "text-green-500",
  Kuwait: "text-emerald-300",
  Bahrain: "text-red-500",
  "South Africa": "text-yellow-400",
  Nigeria: "text-green-500",
  Kenya: "text-red-400",
  Afghanistan: "text-emerald-500",
  "Sri Lanka": "text-yellow-400",
  Maldives: "text-sky-400",
  Egypt: "text-red-400",
  Ethiopia: "text-amber-400",
  Ghana: "text-yellow-400",
  Tanzania: "text-green-400",
  Jordan: "text-rose-400",
  Iraq: "text-emerald-400",
  Malaysia: "text-blue-400",
};

/* ---------- ANIMATION VARIANTS ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center text-white">
          {/* LEFT CONTENT */}
          <motion.div variants={fadeUp} className="py-10 sm:py-16">
            {/* Trust Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm mb-5
                            bg-green-500/10 border border-green-500/20 backdrop-blur"
            >
              <Globe className="text-green-500" size={20} />
              Trusted International Admission Consultancy
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
              Study in India with
              <span className="block text-blue-300">
                Expert Admission Guidance
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              We help international students secure admissions in
              government-recognized Indian universities through a transparent,
              ethical, and fully guided process — from counselling to campus
              arrival.
            </p>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl
                           bg-blue-600 px-6 sm:px-8 py-3.5 sm:py-4
                           text-sm sm:text-base font-medium text-white
                           hover:bg-blue-700 transition"
              >
                Start Free Counselling
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/admission-process"
                className="inline-flex items-center justify-center gap-2 rounded-xl
                           border border-white/30 px-6 sm:px-8 py-3.5 sm:py-4
                           text-sm sm:text-base font-medium text-white
                           hover:bg-white/10 transition"
              >
                View Admission Process
              </Link>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                "UGC, AICTE & NMC Approved Universities",
                "Ministry of Education Recognized Institutions",
                "Transparent Fees & Official Documentation",
                "Dedicated Country-Wise Counsellors",
                "Complete Visa & Travel Assistance",
                "On-Arrival Student Support in India",
              ].map((item) => (
                <TrustItem key={item} text={item} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT – COUNTRY SECTION */}
          <motion.div variants={fadeUp} className="relative mt-6 lg:mt-0">
            {/* GLOW */}
            <div
              className="hidden sm:block absolute -inset-8 rounded-3xl
                            bg-gradient-to-br from-black/60 via-indigo-900/40 to-purple-900/40
                            blur-3xl"
            />
            <div className="hidden sm:block absolute -inset-3 rounded-3xl ring-1 ring-white/10" />

            <div
              className="relative rounded-2xl sm:rounded-3xl
                            bg-white/10 backdrop-blur-xl border border-white/30
                            p-6 sm:p-8 lg:p-10 shadow-2xl"
            >
              {/* HEADING */}
              <div className="flex flex-col items-center gap-2">
                <span
                  className="
                    inline-flex items-center
                    rounded-full
                    bg-white/10 backdrop-blur
                    border border-white/30
                    px-4 py-1.5
                    text-sm sm:text-base font-semibold
                    text-white
                  "
                >
                  Countries We Serve
                </span>

                <p className="text-xs sm:text-sm text-gray-200 text-center">
                  Dedicated admission support for students from:
                </p>
              </div>

              {/* COUNTRY GRID */}
              <motion.div
                variants={staggerContainer}
                className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
              >
                {Object.keys(countryColors).map((country) => (
                  <CountryCard key={country} name={country} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function TrustItem({ text }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start gap-3 rounded-xl
                 bg-white/5 border border-white/20
                 px-3 sm:px-4 py-3"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full
                       bg-green-400/20 shrink-0"
      >
        <CheckCircle size={16} className="text-green-400" />
      </span>
      <span className="text-xs sm:text-sm text-gray-200 leading-snug">
        {text}
      </span>
    </motion.div>
  );
}

function CountryCard({ name }) {
  const color = countryColors[name] || "text-gray-300";

  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-3
                 min-h-[48px]
                 rounded-xl
                 border border-white/30
                 bg-white/10 backdrop-blur
                 px-4 py-3
                 text-sm font-medium text-white"
    >
      <MapPin size={14} className={`${color} shrink-0`} />
      <span className="leading-none">{name}</span>
    </motion.div>
  );
}

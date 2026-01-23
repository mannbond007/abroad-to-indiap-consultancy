import {
  GraduationCap,
  Wallet,
  Languages,
  Globe,
  Briefcase,
} from "lucide-react";

const WhyIndia = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      
      {/* BLENDED BACKGROUND (MINT + SOFT GREEN GLOW) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, 
              rgba(240,253,250,1) 0%, 
              rgba(204,251,241,0.7) 30%, 
              rgba(153,246,228,0.5) 60%, 
              rgba(94,234,212,0.4) 100%
            ),
            radial-gradient(circle at center, rgba(143,255,176,0.35), transparent 65%),
            radial-gradient(circle at 40% 30%, rgba(255,255,255,0.8) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(167,243,208,0.5) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(209,250,229,0.6) 0%, transparent 45%)
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-slate-900">

        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Why Study in India?
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">
            India offers globally recognized education, affordable tuition,
            and a culturally inclusive environment for international students.
          </p>
        </div>

        {/* REASONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <Reason
            icon={<GraduationCap size={26} />}
            title="Globally Recognized Degrees"
            description="Indian universities are approved by UGC, AICTE, MCI, and other regulatory bodies, ensuring worldwide academic recognition."
          />

          <Reason
            icon={<Wallet size={26} />}
            title="Affordable Education"
            description="High-quality education and living costs that are significantly lower compared to other popular study destinations."
          />

          <Reason
            icon={<Languages size={26} />}
            title="English-Medium Instruction"
            description="Most academic programs are taught in English, enabling international students to adapt smoothly."
          />

          <Reason
            icon={<Globe size={26} />}
            title="Culturally Diverse & Safe"
            description="India is known for its diversity, hospitality, and student-friendly cities with strong international communities."
          />

          <Reason
            icon={<Briefcase size={26} />}
            title="Strong Career Outcomes"
            description="Graduates gain access to global career opportunities through industry-aligned programs and international exposure."
          />

        </div>
      </div>
    </section>
  );
};

export default WhyIndia;

/* ---------- CARD (CLEAN, NO GRADIENT) ---------- */

const Reason = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed text-slate-700">
        {description}
      </p>
    </div>
  );
};

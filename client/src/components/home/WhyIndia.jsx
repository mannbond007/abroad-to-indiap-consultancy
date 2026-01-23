import {
  GraduationCap,
  Wallet,
  BookOpen,
  Languages,
  ShieldCheck,
  Briefcase,
  FileCheck,
  Users,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyIndia = () => {
  const featuresData = [
    {
      icon: <GraduationCap size={22} />,
      title: "Globally Recognized Education",
      description:
        "Indian universities are approved by UGC, AICTE, NMC, PCI and other statutory bodies. Degrees are accepted across the Middle East, Europe, Africa and other regions.",
      color: "emerald",
    },
    {
      icon: <Wallet size={22} />,
      title: "Affordable Education",
      description:
        "India offers high-quality education with significantly lower tuition fees and living costs compared to many Western countries.",
      color: "blue",
    },
    {
      icon: <BookOpen size={22} />,
      title: "Wide Range of Courses",
      description:
        "Students can choose from MBBS, Engineering, Computer Science, Business Management, Pharmacy, Nursing, Data Science, Artificial Intelligence and more.",
      color: "indigo",
    },
    {
      icon: <Languages size={22} />,
      title: "English-Medium Instruction",
      description:
        "Most universities in India offer programs entirely in English, ensuring international students face no language barriers.",
      color: "violet",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Safe & Welcoming Environment",
      description:
        "India hosts students from over 100 countries and provides secure campuses, international student support offices and a multicultural environment.",
      color: "teal",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Career & Internship Opportunities",
      description:
        "Universities emphasize practical learning, internships and industry exposure through collaborations with leading organizations.",
      color: "cyan",
    },
    {
      icon: <FileCheck size={22} />,
      title: "Simple Admission & Visa Process",
      description:
        "The admission and visa process is transparent and straightforward with clear guidance on eligibility and documentation.",
      color: "amber",
    },
    {
      icon: <Users size={22} />,
      title: "Why Choose Our Company",
      description:
        "Authorized representatives of reputed universities, personalized counselling, transparent process with no hidden charges, and complete pre-departure & post-arrival support.",
      color: "rose",
    },
    {
      icon: <Globe size={22} />,
      title: "Global Student Network",
      description:
        "Build lifelong connections with international students, alumni networks, and academic collaborations across the globe.",
      color: "sky",
    },
  ];

  const colorStyles = {
    emerald: {
      border: "border-emerald-200 border-2 hover:border-emerald-300",
      glow: "shadow-emerald-200/40 hover:shadow-emerald-300/60",
      icon: "text-emerald-600 bg-emerald-50",
    },
    blue: {
      border: "border-blue-200 border-2 hover:border-blue-300",
      glow: "shadow-blue-200/40 hover:shadow-blue-300/60",
      icon: "text-blue-600 bg-blue-50",
    },
    indigo: {
      border: "border-indigo-200 border-2 hover:border-indigo-300",
      glow: "shadow-indigo-200/40 hover:shadow-indigo-300/60",
      icon: "text-indigo-600 bg-indigo-50",
    },
    violet: {
      border: "border-violet-200 border-2 hover:border-violet-300",
      glow: "shadow-violet-200/40 hover:shadow-violet-300/60",
      icon: "text-violet-600 bg-violet-50",
    },
    teal: {
      border: "border-teal-200 border-2 hover:border-teal-300",
      glow: "shadow-teal-200/40 hover:shadow-teal-300/60",
      icon: "text-teal-600 bg-teal-50",
    },
    cyan: {
      border: "border-cyan-200 border-2 hover:border-cyan-300",
      glow: "shadow-cyan-200/40 hover:shadow-cyan-300/60",
      icon: "text-cyan-600 bg-cyan-50",
    },
    amber: {
      border: "border-amber-200 border-2 hover:border-amber-300",
      glow: "shadow-amber-200/40 hover:shadow-amber-300/60",
      icon: "text-amber-600 bg-amber-50",
    },
    rose: {
      border: "border-rose-200 border-2 hover:border-rose-300",
      glow: "shadow-rose-200/40 hover:shadow-rose-300/60",
      icon: "text-rose-600 bg-rose-50",
    },
    sky: {
      border: "border-sky-200 border-2 hover:border-sky-300",
      glow: "shadow-sky-200/40 hover:shadow-sky-300/60",
      icon: "text-sky-600 bg-sky-50",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* 🔥 STRONGER BACKGROUND GLOW */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(16,185,129,0.35), transparent 55%),
            radial-gradient(circle at top left, rgba(16,185,129,0.25), transparent 50%),
            radial-gradient(circle at bottom right, rgba(6,182,212,0.22), transparent 55%)
          `,
        }}
      />

      <section className="relative z-10 py-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/50 text-emerald-800 text-sm font-bold tracking-wide uppercase">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Why Study in India
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            A Trusted Destination for International Students
          </h2>

          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-32 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>

          <p className="mt-5 text-slate-700 max-w-xl mx-auto leading-relaxed">
            Globally recognized education, affordability and complete student
            support — all backed by transparent processes.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 max-w-7xl mx-auto">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`
                group p-6 rounded-2xl border bg-white/95 backdrop-blur-sm
                transition-all duration-300 ease-out
                shadow-lg ${colorStyles[feature.color].glow}
                hover:-translate-y-2 hover:scale-[1.02]
                ${colorStyles[feature.color].border}
              `}
            >
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-xl border mb-5 transition-transform duration-300 group-hover:scale-110 ${colorStyles[feature.color].icon}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyIndia;

import {
  ShieldCheck,
  Globe,
  Users,
  FileCheck,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Transparent & Ethical Process",
    description:
      "We follow a completely transparent admission process with no hidden charges, false promises, or misleading commitments.",
  },
  {
    icon: GraduationCap,
    title: "Government-Recognized Universities Only",
    description:
      "We work exclusively with UGC, AICTE, and other officially approved Indian universities and institutions.",
  },
  {
    icon: Users,
    title: "Dedicated Country-Wise Counsellors",
    description:
      "Students receive personalized guidance from counsellors who understand their country-specific academic and visa requirements.",
  },
  {
    icon: FileCheck,
    title: "Strong Documentation & Visa Guidance",
    description:
      "Our experts ensure accurate documentation and proper guidance for student visa applications through official channels.",
  },
  {
    icon: Globe,
    title: "Trusted by International Students",
    description:
      "We have successfully assisted students from multiple countries with admissions and smooth relocation to India.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyYouChooseUs() {
  return (
    <section className="relative bg-white overflow-hidden py-16 sm:py-24">
      {/* BACKGROUND GRID + GLOW */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,0.1) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(16,185,129,0.32), transparent 55%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/50 text-emerald-800 text-xs sm:text-sm font-bold uppercase">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Why Choose Us
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            A Trusted Partner for Studying in India
          </h2>

          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-28 sm:w-32 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>

          <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-slate-800 text-sm sm:text-[15px] leading-relaxed">
            Choosing the right consultancy is crucial. We focus on transparency,
            accuracy, and long-term student success — not shortcuts.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* IMAGES */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {[
              "https://plus.unsplash.com/premium_photo-1723579337749-fa3a901f20fc?w=800&q=80",
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
              "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80",
              "https://plus.unsplash.com/premium_photo-1713296254807-e2bc3cb481d3?w=800&q=80",
            ].map((src, i) => (
              <motion.img
                key={i}
                variants={fadeUp}
                src={src}
                alt="International students"
                className={`
                  rounded-2xl shadow-lg object-cover
                  aspect-[4/3] sm:aspect-[4/5]
                  ${i % 2 === 1 ? "sm:mt-10" : ""}
                `}
              />
            ))}
          </motion.div>

          {/* REASONS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 sm:gap-5"
                >
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/40">
                    <Icon size={22} className="text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-[15px] text-slate-800 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* TRUST LINE */}
            <motion.div
              variants={fadeUp}
              className="flex items-start sm:items-center gap-3 mt-6 sm:mt-8 rounded-xl bg-emerald-50 border border-emerald-500/50 p-4"
            >
              <CheckCircle className="text-emerald-600 mt-0.5 sm:mt-0" size={22} />
              <p className="text-sm font-semibold text-emerald-800">
                We prioritize student safety, legal compliance, and long-term
                academic success above everything else.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is studying in India safe for international students?",
    answer:
      "Yes. Indian universities host students from many countries and generally provide secure campuses, hostel facilities, and international student support services.",
  },
  {
    question: "Are Indian degrees recognized internationally?",
    answer:
      "Yes. Degrees from universities approved by bodies such as UGC, AICTE, NMC, and other regulators are recognized in many countries worldwide.",
  },
  {
    question: "What is the eligibility criteria to study in India?",
    answer:
      "Eligibility depends on the chosen course and university. Academic background, subjects studied, and minimum marks are evaluated according to official guidelines.",
  },
  {
    question: "Is education in India affordable for international students?",
    answer:
      "Yes. Compared to many Western countries, India offers lower tuition fees and affordable living costs while maintaining acceptable academic standards.",
  },
  {
    question: "Do international students need to know Hindi?",
    answer:
      "No. Most universities offer higher education programs in English, especially in medicine, engineering, management, and technical fields.",
  },
  {
    question: "How long does the admission process usually take?",
    answer:
      "The admission process typically takes between 2-10 weeks, depending on document readiness and university response time.",
  },
  {
    question: "Who makes the final decision on Indian student visas?",
    answer:
      "The Indian Embassy or High Commission makes the final decision on student visa approval. No consultant or institution can guarantee a visa.",
  },
  {
    question: "Can international students work part-time while studying in India?",
    answer:
      "No. International students are generally not permitted to work part-time in India and should plan their finances accordingly.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* BACKGROUND GRID + SOFT GREEN GLOW */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,0.14) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(16,185,129,0.35), transparent 55%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
                       bg-emerald-500/15 border border-emerald-400/60
                       text-emerald-900 text-sm font-bold uppercase"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            FAQs
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-28 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>

          <p className="mt-5 max-w-2xl mx-auto text-slate-900 text-[15px] leading-relaxed">
            Clear, honest answers to the most common questions international
            students ask before choosing India as their study destination.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  rounded-lg
                  border border-emerald-300/50
                  bg-zinc-50/10 backdrop-blur-xl
                  shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                "
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-emerald-600 mt-1 shrink-0"
                    />
                    <span className="text-[16px] font-semibold text-slate-900">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    size={22}
                    className={`text-emerald-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[15px] text-slate-900 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

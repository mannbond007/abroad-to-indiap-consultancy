import { motion } from "framer-motion";

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

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The counseling process was structured, transparent, and very professional. I always knew what the next step was.",
      name: "Rahul Sharma",
      role: "Nepal · AIIMS Delhi",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      id: 2,
      text: "They explained all available options honestly and helped me select the right university and course.",
      name: "Ayesha Khan",
      role: "Bangladesh · Manipal University",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      id: 3,
      text: "Professional communication and reliable support throughout the admission and visa process.",
      name: "Omar Al-Hassan",
      role: "UAE · Amity University",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    },
    {
      id: 4,
      text: "Ethical counseling and transparent guidance gave me confidence at every stage.",
      name: "Fatima Noor",
      role: "Afghanistan · Jamia Hamdard",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,0.12) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(16,185,129,0.30), transparent 55%)
          `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-emerald-500/15 border border-emerald-400/60
            text-emerald-900 text-sm font-semibold uppercase"
          >
            <span className="h-2.5 w-2.5 font-extrabold rounded-full bg-emerald-500" />
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Don&apos;t just take our words
          </h2>

          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-28 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 text-[15px] leading-relaxed">
            Honest experiences shared by international students who trusted us
            for transparent guidance and professional admission support in India.
          </p>
        </motion.div>

        {/* ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`
                bg-white/95
                border border-slate-200/70
                rounded-2xl
                p-7
                shadow-sm
                hover:shadow-lg hover:border-emerald-300/60
                transition-all duration-300 ease-out
                ${
                  index === 0 || index === 3
                    ? "md:col-span-2"
                    : "md:col-span-1"
                }
              `}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#10B981"
                      className="opacity-80"
                    >
                      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.8 6.2 20.3l1.1-6.4L2.6 9.3l6.5-.9L12 2.5z" />
                    </svg>
                  ))}
              </div>

              <p
                className={`text-slate-700 text-[15px] leading-relaxed ${
                  index === 0 || index === 3 ? "max-w-xl mb-12" : "mb-8"
                }`}
              >
                “{t.text}”
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-slate-900 text-sm font-medium">
                    {t.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

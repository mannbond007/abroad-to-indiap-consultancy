import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

/* ANIMATION */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      className="relative overflow-hidden bg-slate-800 text-slate-200"
    >
      {/* SOFT GRID + GREEN GLOW */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,0.12) 1px, transparent 1px),
            radial-gradient(circle at top, rgba(16,185,129,0.28), transparent 60%)
          `,
          backgroundSize: "36px 36px, 36px 36px, 100% 100%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <motion.div variants={item}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/40">
                <GraduationCap className="text-emerald-400" />
              </div>
              <span className="text-lg font-semibold text-white">
                Study<span className="text-slate-400">In</span>
                <span className="text-emerald-400">India</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Trusted international admission consultancy helping students
              pursue globally recognized education in India through a
              transparent, ethical, and student-first process.
            </p>

            <div className="flex items-center gap-3 mt-5 text-sm text-emerald-300">
              <ShieldCheck size={18} />
              Transparent & Government-Compliant Process
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Why Study in India",
                "Admission Process",
                "Courses",
                "Countries We Serve",
                "FAQs",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* STUDENT RESOURCES */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Student Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Eligibility Criteria",
                "Visa Guidance",
                "University Recognition",
                "Accommodation Support",
                "Pre-Departure Guidance",
                "Post-Arrival Support",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-emerald-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item}>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Contact Information
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-400 mt-1" />
                <span>
                  Registered Office<br />
                  India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400" />
                <span>+91 XXXXX XXXXX</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400" />
                <span>info@studyinindia.com</span>
              </li>

              <li className="flex items-center gap-3">
                <Globe size={18} className="text-emerald-400" />
                <span>Serving International Students</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          variants={item}
          className="mt-16 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400"
        >
          <span>
            © {new Date().getFullYear()} StudyInIndia. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              Disclaimer
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

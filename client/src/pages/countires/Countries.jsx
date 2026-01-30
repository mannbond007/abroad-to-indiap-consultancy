import CountryCard from "../countires/CountryCard";
import {
  GraduationCap,
  FileCheck,
  ShieldCheck,
  Home,
  Users,
  Plane,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- ANIMATION VARIANTS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Countries() {
  return (
    <section className="relative overflow-hidden px-6 py-40 sm:py-48">
      {/* BACKGROUND GRID + GREEN GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9811a_1px,transparent_1px),linear-gradient(to_bottom,#10b9811a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-emerald-400/30 blur-[120px]" />
      </div>

      {/* TRUST BADGE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center mb-14"
      >
        <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/70 border border-emerald-300/50 backdrop-blur-md shadow-sm">
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
          </div>
          <p className="text-sm text-slate-700 font-medium">
            Trusted by 10,000+ international students
          </p>
        </div>
      </motion.div>

      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight">
          Countries We Serve for{" "}
          <span className="text-emerald-600">Study in India</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          Complete admission guidance, university selection, and visa assistance
          for international students.
        </p>
      </motion.div>

      {/* COUNTRY CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <motion.div variants={fadeUp}>
          <CountryCard
            to="/study-in-india-for-nepal-students"
            country="Nepal"
            tooltip="High success rate • Easy documentation"
            image="https://images.unsplash.com/photo-1617469165786-8007eda3caa7?w=500&auto=format&fit=crop&q=60"
            title="Affordable Education in India"
            description="No IELTS required for most universities, low tuition fees,
            and fast admission process for Nepalese students."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <CountryCard
            to="/study-in-india-for-bangladesh-students"
            country="Bangladesh"
            tooltip="Medical & Engineering Programs"
            image="https://images.unsplash.com/photo-1616458050653-0f365d14e93b?w=500&auto=format&fit=crop&q=60"
            title="High Visa Success Rate"
            description="English-medium programs with excellent opportunities
            in MBBS, engineering, and management studies."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <CountryCard
            to="/study-in-india-for-uae-students"
            country="UAE"
            tooltip="NRI quota available"
            image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200"
            title="Fast-Track Admissions"
            description="NRI & management quota seats with globally recognized
            Indian university degrees."
          />
        </motion.div>

        {/* Sri Lanka */}
        <motion.div variants={fadeUp}>
          <CountryCard
            to="/study-in-india-for-srilanka-students"
            country="Sri Lanka"
            tooltip="Medical & IT Programs"
            image="https://images.unsplash.com/photo-1583753075968-1236ccb83c66?w=500&auto=format&fit=crop&q=60"
            title="Popular Choice for Medical Studies"
            description="Affordable MBBS, IT, and management programs with English-medium education and easy admission process."
          />
        </motion.div>

        {/* South Africa */}
        <motion.div variants={fadeUp}>
          <CountryCard
            to="/study-in-india-for-southafrica-students"
            country="South Africa"
            tooltip="Globally Recognized Degrees"
            image="https://images.unsplash.com/photo-1542327897-d73f4005b533?w=500&auto=format&fit=crop&q=60"
            title="Globally Accepted Indian Degrees"
            description="Study engineering, business, and technology programs in India with strong international recognition."
          />
        </motion.div>

        {/* Afghanistan */}
        <motion.div variants={fadeUp}>
          <CountryCard
            to="/study-in-india-for-afghanistan-students"
            country="Afghanistan"
            tooltip="Safe & Verified Admission Process"
            image="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60"
            title="Secure Education Pathways"
            description="Dedicated counselling, verified universities, and complete support for Afghan students studying in India."
          />
        </motion.div>
      </motion.div>

      {/* VALUE SECTION */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {[
          {
            icon: <GraduationCap className="h-7 w-7 text-emerald-600" />,
            title: "Authorized University Partners",
            points: [
              "Direct tie-ups with approved Indian universities",
              "Verified seats with genuine admission letters",
              "Transparent university selection process",
            ],
          },
          {
            icon: <FileCheck className="h-7 w-7 text-emerald-600" />,
            title: "Visa & Documentation Support",
            points: [
              "Student visa application guidance",
              "FRRO registration assistance",
              "Complete document verification",
            ],
          },
          {
            icon: <ShieldCheck className="h-7 w-7 text-emerald-600" />,
            title: "Transparent & Secure Process",
            points: [
              "No hidden charges or false promises",
              "Clear communication with parents & students",
              "Ethical admission counselling",
            ],
          },
          {
            icon: <Home className="h-7 w-7 text-emerald-600" />,
            title: "Accommodation Assistance",
            points: [
              "Hostel & private accommodation guidance",
              "Safe locations near universities",
              "Support before and after arrival",
            ],
          },
          {
            icon: <Users className="h-7 w-7 text-emerald-600" />,
            title: "Dedicated Student Counsellors",
            points: [
              "Country-specific admission experts",
              "Career-oriented counselling",
              "One-on-one student support",
            ],
          },
          {
            icon: <Plane className="h-7 w-7 text-emerald-600" />,
            title: "Post-Arrival Support in India",
            points: [
              "Arrival & orientation guidance",
              "Local support after landing",
              "Continued assistance during studies",
            ],
          },
        ].map((item, i) => (
          <motion.div key={i} variants={fadeUp}>
            <ValueCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------------- VALUE CARD ---------------- */

function ValueCard({ icon, title, points }) {
  return (
    <div
      className="rounded-2xl p-8 bg-white/80 backdrop-blur-lg
                    border border-emerald-200/50 shadow-sm
                    hover:-translate-y-1 hover:shadow-lg
                    transition-all duration-300"
    >
      <div className="flex justify-center">
        <div
          className="flex items-center justify-center h-14 w-14
                        rounded-full border border-emerald-300/60
                        bg-emerald-50"
        >
          {icon}
        </div>
      </div>

      <div className="mt-6 text-left">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <ul className="mt-4 space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span
                className="flex items-center justify-center h-5 w-5 rounded-full
                               bg-emerald-100 border border-emerald-300
                               text-emerald-600 mt-0.5"
              >
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-slate-600 text-sm leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import {
  ClipboardCheck,
  GraduationCap,
  FileText,
  MailCheck,
  CreditCard,
  IdCard,
  Plane,
  Home,
  CheckCircle,
  ShieldCheck,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const processData = [
  {
    icon: ClipboardCheck,
    title: "Eligibility Assessment",
    points: [
      "Evaluation of academic background and completed qualifications",
      "Assessment of subject relevance for selected courses",
      "Verification of year gaps and academic continuity",
      "Eligibility based on university and regulatory norms",
      "Ensures applications are realistic and legally valid",
    ],
    color: "emerald",
  },
  {
    icon: GraduationCap,
    title: "Course & University Selection",
    points: [
      "Shortlisting universities approved by Indian authorities",
      "Selection based on eligibility, intake availability, and budget",
      "Alignment with student’s long-term career objectives",
      "Risk analysis of acceptance probability",
      "Final selection approved by student and counsellor",
    ],
    color: "blue",
  },
  {
    icon: FileText,
    title: "Document Preparation",
    points: [
      "Compilation of academic transcripts and certificates",
      "Verification of passport and identity documents",
      "Preparation of application forms and declarations",
      "Document format as per university requirements",
      "Final review to prevent rejection or delays",
    ],
    color: "indigo",
  },
  {
    icon: MailCheck,
    title: "Application & Offer Letter",
    points: [
      "Submission of complete application to selected universities",
      "Evaluation by university admission committee",
      "Clarifications handled if requested by university",
      "Issuance of official offer letter upon approval",
      "Confirmation of provisional admission status",
    ],
    color: "violet",
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    points: [
      "Clear explanation of tuition and applicable charges",
      "Payment through official university-approved channels",
      "Receipt and confirmation from university accounts",
      "Compliance with university payment deadlines",
      "Admission seat secured after successful payment",
    ],
    color: "teal",
  },
  {
    icon: IdCard,
    title: "Student Visa Application",
    points: [
      "Guidance on Indian student visa category",
      "Submission of visa application with offer letter",
      "Biometric appointment and interview preparation",
      "Verification of financial and academic documents",
      "Visa decision solely by Indian Embassy or High Commission",
    ],
    color: "cyan",
  },
  {
    icon: Plane,
    title: "Pre-Departure Preparation",
    points: [
      "Travel planning and flight guidance",
      "Accommodation briefing (hostel or private)",
      "Packing checklist for international students",
      "Cultural and academic orientation session",
      "Guidelines on arrival procedures in India",
    ],
    color: "amber",
  },
  {
    icon: Home,
    title: "Arrival & Post-Arrival Support",
    points: [
      "University reporting and document submission",
      "Assistance with hostel or local accommodation",
      "Support with local registration and orientation",
      "Initial settlement and student guidance",
      "Emergency support during initial days",
    ],
    color: "rose",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Student Reporting",
    points: [
      "Guidance on FRRO registration (where applicable)",
      "Explanation of attendance and academic rules",
      "Awareness of visa validity and conditions",
      "Support in maintaining legal student status",
      "Regular compliance reminders when required",
    ],
    color: "emerald",
  },
//   {
//     icon: LineChart,
//     title: "Academic Progress Monitoring",
//     points: [
//       "Orientation on academic expectations in Indian universities",
//       "Guidance on exams, grading, and evaluations",
//       "Support in case of academic difficulties",
//       "Coordination with university support systems",
//       "Encouragement for smooth academic progression",
//     ],
//     color: "blue",
//   },
];

/* ---------------- STYLES ---------------- */

const colorStyles = {
  emerald: "border-emerald-200 text-emerald-700 bg-emerald-50",
  blue: "border-blue-200 text-blue-700 bg-blue-50",
  indigo: "border-indigo-200 text-indigo-700 bg-indigo-50",
  violet: "border-violet-200 text-violet-700 bg-violet-50",
  teal: "border-teal-200 text-teal-700 bg-teal-50",
  cyan: "border-cyan-200 text-cyan-700 bg-cyan-50",
  amber: "border-amber-200 text-amber-700 bg-amber-50",
  rose: "border-rose-200 text-rose-700 bg-rose-50",
};

/* ---------------- ANIMATION ---------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

export default function ProcessToStudyInIndia() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* GRID PATTERN BACKGROUND */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16,185,129,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16,185,129,0.06) 1px, transparent 1px),
            radial-gradient(circle at center, rgba(16,185,129,0.35), transparent 55%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      <section className="relative z-10 py-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/50 text-emerald-800 text-sm font-bold uppercase">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Admission Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Process to Study in India
          </h2>

          <div className="flex justify-center mt-3">
            <span className="h-[3px] w-32 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
          </div>

          <p className="mt-5 max-w-2xl mx-auto text-slate-800 text-[15px] leading-relaxed">
            A structured, transparent, and student-focused admission journey
            covering eligibility, admission, visa, compliance, and academic
            continuity for international students in India.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto"
        >
          {processData.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className={`rounded-2xl border-2 bg-white p-7 shadow-lg hover:-translate-y-2 hover:shadow-xl transition ${colorStyles[step.color]}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border mb-5 ${colorStyles[step.color]}`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>

                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle size={16} className="text-emerald-600 mt-1" />
                      <span className="text-[15px] text-slate-800 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}

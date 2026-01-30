import { CheckCircle, GraduationCap, FileText, Plane, Home } from "lucide-react";

export default function Nepal() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      
      {/* BACKGROUND EFFECT */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98114_1px,transparent_1px),linear-gradient(to_bottom,#10b98114_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-emerald-400/25 blur-[130px]" />
      </div>

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-tight">
          Study in India for{" "}
          <span className="text-emerald-600">Nepal Students</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Affordable education, globally recognized degrees, and a smooth
          admission process tailored specifically for Nepalese students.
        </p>
      </div>

      {/* WHY INDIA */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-28">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Why Nepalese Students Choose India
          </h2>
          <p className="text-slate-600 leading-relaxed">
            India has become one of the most preferred destinations for students
            from Nepal due to cultural familiarity, quality education, and
            cost-effective programs across medicine, engineering, management,
            and IT.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "No language barrier and cultural similarity",
              "No IELTS required for most universities",
              "Affordable tuition & living costs",
              "Globally accepted Indian degrees",
              "Simple visa and admission process",
            ].map((point, index) => (
              <li key={index} className="flex gap-3 items-start">
                <CheckCircle className="text-emerald-600 mt-0.5" size={18} />
                <span className="text-slate-700 text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 shadow-sm p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Popular Courses for Nepal Students
          </h3>
          <ul className="space-y-3 text-slate-600 text-sm">
            <li>• MBBS & Allied Medical Sciences</li>
            <li>• Engineering (B.Tech / M.Tech)</li>
            <li>• Computer Science & IT</li>
            <li>• Management (BBA / MBA)</li>
            <li>• Pharmacy & Nursing</li>
          </ul>
        </div>
      </div>

      {/* ADMISSION PROCESS */}
      <div className="max-w-7xl mx-auto mb-32">
        <h2 className="text-3xl font-semibold text-slate-900 text-center mb-14">
          Admission Process for Nepal Students
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <ProcessCard
            icon={<GraduationCap />}
            title="Counselling & Course Selection"
            desc="Personalized guidance to choose the right university and program."
          />
          <ProcessCard
            icon={<FileText />}
            title="Application & Documentation"
            desc="We handle applications, offer letters, and document verification."
          />
          <ProcessCard
            icon={<Plane />}
            title="Visa & Travel Assistance"
            desc="Complete support with visa, travel, and pre-departure guidance."
          />
          <ProcessCard
            icon={<Home />}
            title="Arrival & Accommodation"
            desc="Help with hostels, local registration, and settling in India."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-lg border border-emerald-200 rounded-2xl p-10 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-900">
          Start Your Study Journey in India
        </h3>
        <p className="mt-4 text-slate-600">
          Get expert counselling and end-to-end admission support for studying
          in India from Nepal.
        </p>
        <a
          href="/contact-us"
          className="inline-block mt-6 rounded-xl bg-emerald-600 px-8 py-3 text-white font-medium hover:bg-emerald-700 transition"
        >
          Get Free Counselling
        </a>
      </div>

    </section>
  );
}

/* ---------- SUB COMPONENT ---------- */

function ProcessCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-emerald-50 border border-emerald-200 mb-4 text-emerald-600">
        {icon}
      </div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

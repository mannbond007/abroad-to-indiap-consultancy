import React from "react";
import { Link } from "react-router-dom";

/* ---------- COUNTRY → FLAG IMAGE MAP ---------- */
const countryFlagMap = {
  Nepal: "https://flagcdn.com/w40/np.png",
  Bangladesh: "https://flagcdn.com/w40/bd.png",
  UAE: "https://flagcdn.com/w40/ae.png",
  India: "https://flagcdn.com/w40/in.png",
  Qatar: "https://flagcdn.com/w40/qa.png",
  Oman: "https://flagcdn.com/w40/om.png",
  Afghanistan: "https://flagcdn.com/w40/af.png",
  "Sri Lanka": "https://flagcdn.com/w40/lk.png",
  "South Africa": "https://flagcdn.com/w40/za.png",
};

function getCountryFlag(country) {
  return countryFlagMap[country];
}

export default function CountryCard({
  to,
  country,
  image,
  tooltip,
  title,
  description,
}) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative h-full flex flex-col
                 bg-white/80 backdrop-blur-lg
                 border border-slate-200/60 rounded-2xl
                 shadow-sm hover:shadow-xl
                 transition-all duration-300"
    >
      {/* TOOLTIP */}
      <span
        className="absolute z-10 px-3 py-1.5 text-sm rounded-md
                   bg-white/70 border border-slate-200
                   backdrop-blur text-slate-800
                   font-medium pointer-events-none"
        style={{
          top: position.y + 12,
          left: position.x + 12,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.85)",
          transition: "all 0.2s ease-out",
        }}
      >
        {tooltip}
      </span>

      {/* IMAGE (FIXED HEIGHT) */}
      <Link to={to} className="block">
        <img
          src={image}
          alt={country}
          className="rounded-t-2xl w-full h-56 object-cover"
        />
      </Link>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        {/* COUNTRY BADGE */}
        <div>
          <span
            className="inline-flex items-center gap-2
                       px-3 py-1 rounded-full
                       bg-emerald-50 border border-emerald-200
                       text-slate-900 font-semibold text-sm"
          >
            {getCountryFlag(country) && (
              <img
                src={getCountryFlag(country)}
                alt={`${country} flag`}
                className="h-5 w-7 rounded-sm object-cover"
              />
            )}
            {country}
          </span>
        </div>

        {/* TITLE */}
        <h4 className="text-base font-semibold text-slate-800 leading-snug">
          {title}
        </h4>

        {/* DESCRIPTION (flex-grow naturally) */}
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* CTA PUSHED TO BOTTOM */}
        <Link
          to={to}
          className="mt-auto inline-flex items-center
                     text-emerald-600 font-medium text-sm
                     hover:underline"
        >
          Explore admissions →
        </Link>
      </div>
    </div>
  );
}

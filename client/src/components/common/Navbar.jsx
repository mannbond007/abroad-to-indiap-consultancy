import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-4 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div
            className="
              flex items-center justify-between min-h-[64px]
              rounded-full
              bg-slate-900/70 backdrop-blur-xl
              border border-white/10
              px-6
              text-white
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            "
          >
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 text-lg font-semibold tracking-tight"
            >
              <div
                className="
                  flex items-center justify-center h-10 w-10 rounded-full
                 bg-gradient-to-r from-blue-800 to-indigo-900
                  shadow-lg shadow-blue-600/30
                "
              >
                <GraduationCap size={28} className="text-white" />
              </div>

              <span className="leading-tight">
                Study
                <span className="mx-0.5 text-slate-400 font-medium">In</span>
                <span className="text-blue-400">India</span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <NavItem to="/" active={pathname === "/"}>
                Home
              </NavItem>
              <NavItem
                to="/study-in-india-for-nepal-students"
                active={pathname.includes("study-in-india")}
              >
                Countries
              </NavItem>
              <NavItem to="/courses" active={pathname.includes("courses")}>
                Courses
              </NavItem>
              <NavItem
                to="/admission-process"
                active={pathname.includes("admission")}
              >
                Process
              </NavItem>
              <NavItem to="/contact-us" active={pathname.includes("contact")}>
                Contact
              </NavItem>
            </nav>

            {/* CTA + MOBILE */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact-us"
                className="
                  hidden md:inline-flex items-center gap-2
                  rounded-xl
                  bg-blue-600/90
                  px-5 py-2.5
                  text-sm font-medium
                  text-white
                  hover:bg-blue-600
                  transition
                "
              >
                Free Counselling
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-white/90 hover:text-white transition"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* DRAWER */}
            <motion.aside
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-neutral-900 text-white z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="text-lg font-semibold">Menu</span>
                <button onClick={() => setOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              <motion.nav
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col px-8 py-10 gap-6 text-lg font-medium"
              >
                <MobileItem to="/" setOpen={setOpen}>
                  Home
                </MobileItem>
                <MobileItem
                  to="/study-in-india-for-nepal-students"
                  setOpen={setOpen}
                >
                  Countries
                </MobileItem>
                <MobileItem to="/courses" setOpen={setOpen}>
                  Courses
                </MobileItem>
                <MobileItem to="/admission-process" setOpen={setOpen}>
                  Admission Process
                </MobileItem>
                <MobileItem to="/contact-us" setOpen={setOpen}>
                  Contact
                </MobileItem>

                <Link
                  to="/contact-us"
                  onClick={() => setOpen(false)}
                  className="
                    mt-8 inline-flex items-center justify-center gap-2
                    rounded-xl bg-blue-600 py-4
                    text-white hover:bg-blue-700 transition
                  "
                >
                  Free Counselling
                  <ArrowRight size={18} />
                </Link>
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

function NavItem({ to, children, active }) {
  return (
    <Link
      to={to}
      className="relative text-gray-300 hover:text-white transition"
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition-transform origin-left ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
}

function MobileItem({ to, children, setOpen }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 20 },
        show: { opacity: 1, x: 0 },
      }}
    >
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className="text-gray-200 hover:text-blue-400 transition"
      >
        {children}
      </Link>
    </motion.div>
  );
}

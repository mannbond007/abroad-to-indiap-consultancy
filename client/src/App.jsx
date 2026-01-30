import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Pages
import Home from "./pages/Home";
import AdmissionProcess from "./pages/AdmissionProcess";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Countries
import Countries from "./pages/countires/Countries";
import Nepal from "./pages/countires/Nepal";
import Bangladesh from "./pages/countires/Bangladesh";
import UAE from "./pages/countires/UAE";
import SriLanka from "./pages/countires/SriLanka";
import SouthAfrica from "./pages/countires/SouthAfrica";
import Afghanistan from "./pages/countires/Afghanistan";

export default function App() {
  return (
    <Routes>
      {/* Main Layout */}
      <Route element={<MainLayout />}>
        {/* Home */}
        <Route index element={<Home />} />

        {/* Countries list */}
        <Route path="countries" element={<Countries />} />

        {/* Country pages */}
        <Route path="study-in-india-for-nepal-students" element={<Nepal />} />
        <Route
          path="study-in-india-for-bangladesh-students"
          element={<Bangladesh />}
        />
        <Route path="study-in-india-for-uae-students" element={<UAE />} />
        <Route
          path="study-in-india-for-srilanka-students"
          element={<SriLanka />}
        />
        <Route
          path="study-in-india-for-southafrica-students"
          element={<SouthAfrica />}
        />
        <Route
          path="study-in-india-for-afghanistan-students"
          element={<Afghanistan />}
        />

        {/* Other pages */}
        <Route path="admission-process" element={<AdmissionProcess />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        {/* Fallback (IMPORTANT) */}
        <Route
          path="*"
          element={
            <div className="text-center py-40 text-xl text-slate-600">
              Page not found
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

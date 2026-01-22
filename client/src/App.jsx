import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";


import Home from "./pages/Home";
import Nepal from "./pages/countires/Nepal"
import AdmissionProcess from "./pages/AdmissionProcess";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";


export default function App() {
  return (
    <Routes>
      {/* Main Website Layout */}
      <Route element={<MainLayout />}>
        
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Country Pages */}
        <Route
          path="/study-in-india-for-nepal-students"
          element={<Nepal />}
        />

        {/* Other Pages */}
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Route>
    </Routes>
  );
}

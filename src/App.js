// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

const App = () => {
  const darkModeKey = "darkMode";
  const languageKey = "language";

  const storedDarkMode = localStorage.getItem(darkModeKey);
  const storedLanguage = localStorage.getItem(languageKey);

  const [geceModu, setGeceModu] = useState(storedDarkMode === "true");
  const [language, setLanguage] = useState(storedLanguage || "tr");

  useEffect(() => {
    localStorage.setItem(darkModeKey, geceModu.toString());
    localStorage.setItem(languageKey, language);
  }, [geceModu, language]);

  const toggleGeceModu = () => {
    setGeceModu(!geceModu);
  };

  return (
    <>
      <LanguageProvider language={language}>
        <AppContent geceModu={geceModu} handleToggle={toggleGeceModu} />
      </LanguageProvider>
    </>
  );
};

const AppContent = ({ geceModu, handleToggle }) => {
  const { toggleLanguage } = useLanguage();
  const { language } = useLanguage();

  return (
    <div className={`app-container ${geceModu ? "dark" : "light"}`}>
      <div className="flex justify-end items-end ...">
        <a onClick={toggleLanguage} className="cursor-pointer m-4 ... ">
          {language === "en" ? "Türkçe'ye Geç " : "English"}
        </a>
        <Switch geceModu={geceModu} handleToggle={handleToggle} />
      </div>
      <Hero geceModu={geceModu} />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

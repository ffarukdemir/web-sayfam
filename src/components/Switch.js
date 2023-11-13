import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Switch = ({ geceModu, handleToggle }) => {
  const { language } = useLanguage();

  return (
    <div className="switch-container">
      <label className={`switch ${geceModu ? "light" : "dark"}`}>
        <input type="checkbox" onChange={handleToggle} checked={geceModu} />
        <span className="slider" />
      </label>

      <p className="w-60 flex ... m-4">
        {language === "en" ? "Dark Mode" : "Siyah Tema "}
      </p>
    </div>
  );
};

export default Switch;

import React from "react";

import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const { language } = useLanguage();

  return (
    <div class="my-32">
      <p class="text-center ... my-8 text-3xl font-bold">
        {language === "en" ? "Skills" : "Beceriler "}
      </p>
      <div class="flex items-center justify-center">
        <img src="/skillBoxes.png" alt="asdf" />
      </div>
    </div>
  );
}

export default Skills;

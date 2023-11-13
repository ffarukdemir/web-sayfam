import React from "react";

import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  return (
    <div class="flex justify-end m-24 ...">
      <div class="flex ml-8">
        <h1 class="text-3xl font-bold w-80 mx-16">
          {language === "en"
            ? "Let's work together on your next product "
            : "Yeni projelerde birlikte çalışmaya ne dersin? "}
        </h1>
      </div>
      <div class="mr-72">
        <p>
          <a href="https://github.com/ffarukdemir" class="class= text-blue-700">
            Github
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/faruk-demir-00755a92"
            class="class= text-pink-700"
          >
            LinkedIn
          </a>
          <br />
          <a href="https://leetcode.com/faruk90/">Leetcode</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Hero({ geceModu }) {
  const { language } = useLanguage();

  return (
    <div class="m-8">
      <header>
        <div class="flex justify-between ... pt-12">
          {" "}
          <h1 class="font-bold ... ml-24 text-4xl	w-1/3 ">
            {language === "en"
              ? "👋 Hi! I'm Faruk. I'm a full-stack developer. I can craft solid and scalable frontend products. Lets meet!"
              : "👋 Merhaba! Faruk Ben. Full Stack developer'ım. Sağlam ve ölçeklenebilir Frontend ürünleri üretebilirim. Hadi Başlayalım! "}
          </h1>
          <img
            src="/Adsiz.png"
            alt="asdf"
            class="object-cover h-72  ... pr-40"
          />
        </div>
      </header>
      <div class="ml-16">
        <div class="flex pl-8 ...">
          <img
            src={geceModu ? "/github_dark.png" : "/github.png"}
            class="m-2"
          />
          <p>{"    "}</p>
          <img
            src={geceModu ? "/LinkedIn_dark.png" : "/LinkedIn.png"}
            class="m-2"
          />
        </div>

        <div class="flex ... pl-8">
          <p>
            {language === "en"
              ? "Currently Freelancing for UX, UI & Web Design Projects."
              : " Freelance ve Web dizayn projelerinde çalışmaya istekliyim"}
            <br />
            {language === "en"
              ? "invite me to join your team ➜ farukdemir90@outlook.com"
              : "Takımınıza katmak için davet edin ➜ farukdemir90@outlook.com"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

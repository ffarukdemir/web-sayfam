import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Profile() {
  const { language } = useLanguage();

  return (
    <div class="my-32">
      <h1 class="text-center ... my-8 text-3xl font-bold">
        {language === "en" ? "Profile" : "Profil "}
      </h1>
      <div class="flex justify-between m-8 ">
        <div class="mx-6 bg-[#f3f4f6]  shadow-2xl ... ">
          <div class="m-6">
            <p class="text-pink-700">
              {language === "en" ? "Basic Information " : "Temel Bilgiler "}
            </p>
            <p>
              {language === "en" ? "Birth Day: " : "Doğum Tarihi: "}
              <span>30.08.1990</span>
            </p>
            <p>
              {language === "en" ? "City: " : "Şehir: "}
              <span>istanbul</span>
            </p>
            <p>
              {language === "en" ? "Education: " : "Eğitim Durumu: "}
              <span>
                {language === "en"
                  ? "Gebze Tech. Uni. / Electronics Engineering, 2014"
                  : "Gebze Teknik Üni. Elektronik Müh. 2014"}
              </span>
            </p>
            <p>
              {language === "en" ? "Prefered Role: " : "Tercih Ettiği Rol: "}
              <span>{"Front End"}</span>
            </p>
          </div>
        </div>
        <div class="w-1/3 mx-12 text-justify">
          <p>{language === "en" ? "About Me: " : "Hakkımda: "}</p>
          <p>
            {language === "en"
              ? " I graduated in Electronics Engineering in 2014. I have been interested in web development for more than a year. My goal is to stay up-to-date with new technologies and integrate them into my lifelong learning journey. I completed a 10-month full-stack development bootcamp with Workintech. This experience was not only valuable for enhancing my technical skills but also for broadening my perspective on web development "
              : "2014 yılında Elektronik Mühendisliği'nden mezun oldum. Bir yıldan fazla bir süredir Web geliştirme yapıyorum. Amacım yeni teknolojileri takip etmek ve ömür boyu öğrenme yolculuğuma entegre etmektir. Workintech ile 10 aylık full stack web development için bootcamp eğitimini tamamladım. Bu deneyim, teknik becerilerimi artırmakla kalmayıp, aynı zamanda web geliştirme konusundaki bakış açımı genişletmemde de çok değerliydi. "}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

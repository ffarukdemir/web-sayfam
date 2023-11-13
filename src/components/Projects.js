import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { language } = useLanguage();

  return (
    <div class="my-32">
      <h1 class="text-center ... my-8 text-3xl font-bold	">
        {" "}
        {language === "en" ? "Projects" : "Projeler"}
      </h1>
      <div class="flex ... m-8  justify-around ...">
        <div>
          <p class="flex ... justify-center my-4 font-bold text-2xl">
            {language === "en" ? "Random Jokes" : "Rastgele Şakalar"}
          </p>
          <p class=" w-60 text-justify ...">
            {language === "en"
              ? "In this project I get the data from an API with redux thunk and display as joke and user can add it in favorite list. Redux, localStorage and react-toastify are been used."
              : " Bu projede, Redux Thunk kullanarak bir API'den veri alıyor ve şakaları render ediyorum. Kullanıcı, şakayı favori listesine ekleyebilir. Redux, localStorage ve react-toastify kullanılmıştır."}
          </p>
          <div class="flex my-6 font-bold ">
            <div class="flex justify-center items-center h-8 w-12 bg-blue-200 rounded-full mx-2 ...">
              <p class="text-center">React</p>
            </div>
            <div class="flex justify-center items-center h-8 w-12 bg-blue-200 rounded-full mx-2 ...">
              <p class="text-center">Redux</p>
            </div>
            <div class="flex justify-center items-center h-8 w-18 bg-blue-200 rounded-full mx-2 ...">
              <p class="text-center">React-tostify</p>
            </div>
          </div>
          <div class="flex justify-between  my-4 font-bold ...">
            <a href="https://github.com/ffarukdemir/fsweb-s10g4-thunk-and-apis">
              View on Github
            </a>

            <a href="https://thunk-and-apis-seven.vercel.app/">
              {language === "en" ? "Go to app ➜" : "Uygulamaya Git ➜"}
            </a>
          </div>

          <img src="/jokes.png" width={250} />
        </div>
        <div class=" grid content-center ...">
          <p class="flex ... justify-center my-4 font-bold text-2xl">
            {language === "en" ? "Movie List" : "Film Listesi"}
          </p>
          <p class="w-60 text-justify ...">
            {language === "en"
              ? "In this project I created a movielist which you can add and remove favorite films"
              : " Bu projede, Redux kullanarak bir film listesi oluşturdum ve bu listeden istenilen filmlerin favorilere eklenip çıkarılmasına olanak verdim. "}
          </p>
          <div class="flex my-6 font-bold mt-8">
            <div class="flex justify-center items-center h-8 w-12 bg-blue-200 rounded-full mx-2 ...">
              <p class="text-center">React</p>
            </div>
            <div class="flex justify-center items-center h-8 w-12 bg-blue-200 rounded-full mx-2 ...">
              <p class="text-center">Redux</p>
            </div>
          </div>
          <div class="flex justify-between  my-4 font-bold ...">
            <a href="https://github.com/ffarukdemir/fsweb-s10g4-thunk-and-apis">
              {" "}
              View on Github
            </a>
            <a href="https://redux-watchlist-ruddy.vercel.app/">
              {language === "en" ? "Go to app ➜" : "Uygulamaya Git ➜"}
            </a>
          </div>

          <img src="/watchlist.png" width={250} class="mt-12" />
        </div>
      </div>
    </div>
  );
}

export default Projects;

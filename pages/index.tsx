import type { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";
import {
  FaSuitcase,
  FaBirthdayCake,
  FaUser,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaGlobe,
  FaLightbulb,
  FaSpotify,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher.js";
import { useState } from "react";
import About from "../components/About.js";
import Work from "../components/Work.js";
import Skills from "../components/Skills.js";

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const { t } = useTranslation();

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="container min-h-screen max-w-full">
      <nav className="flex justify-between p-2 sticky top-0 left-0 z-10 bg-gray-900 opacity-60 backdrop:blur-3xl">
        <form className="w-11 h-11 rounded-md flex items-center hover:bg-gray-700">
          <button className="hover:bg-gray-700 flex items-center gap-1 mx-auto">
            <FaLightbulb size={20} />
          </button>
        </form>
        <div className="w-11 h-11 rounded-md flex items-center hover:bg-gray-700">
          <div className="hover:bg-gray-700 flex items-center gap-1 mx-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
      <header className="w-[724px] max-w-full mx-auto">
        <div className="w-full aspect-[3/1] bg-gray-700"></div>
        <div className="w-[610px] max-w-full mx-auto grid gap-2 px-4">
          <div className="relative flex justify-end items-center min-h-[90px] py-2">
            <Image
              src="/images/perfil.png"
              alt={"Foto de perfil"}
              width={150}
              height={150}
              className="absolute top-0 transform -translate-y-1/2 left-0 rounded-full border-4"
            />
            <a
              href=""
              title="Download CV"
              target="_blanc"
              className="border-transparent outline-transparent rounded-full flex gap-x-1 items-center text-white px-4 py-2 bg-emerald-700"
            >
              <span className="font-bold">{t("download")}</span>
            </a>
          </div>
          <h1 className="font-bold text-4xl">João Vitor de Andrade</h1>
          <p className="mb-2 text-base">Full Stack Developer Junior ✨</p>
          <span className="flex gap-x-4 items-center flex-wrap text-gray-600 text-base">
            <span className="flex items-center gap-1">
              <FaSuitcase />
              <p className="whitespace-nowrap">{t("status")}</p>
            </span>
            <span className="flex items-center gap-1">
              <FaGlobe />
              <p className="whitespace-nowrap">{t("country")}</p>
            </span>
            <span className="flex items-center gap-1">
              <FaBirthdayCake />
              <p className="whitespace-nowrap">{t("birthday")}</p>
            </span>
            <span className="flex items-center gap-1">
              <FaUser />
              <p className="whitespace-nowrap">{t("pronoun")}</p>
            </span>
            {/* <span className="flex items-center gap-1">
              <a
                href="https://www.instagram.com/andrade_jaum/"
                target="_blanc"
                className="flex items-center gap-1 hover:text-gray-50"
              >
                <FaInstagram />
                <p className="whitespace-nowrap">Instagram</p>
              </a>
            </span>
            <span className="flex items-center gap-1">
              <a
                href="https://github.com/AndradeJaum"
                target="_blanc"
                className="flex items-center gap-1 hover:text-gray-50"
              >
                <FaGithub />
                <p className="whitespace-nowrap">GitHub</p>
              </a>
            </span> */}
          </span>
        </div>
        <div className="w-[610px] max-w-full mx-auto my-12 text-base">
          <div className="max-w-full grid grid-flow-col auto-cols-[1fr] items-center text-gray-600">
            <button
              className={`font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50 ${
                activeSection === "about" ? "text-gray-50" : ""
              }`}
              onClick={() => handleSectionClick("about")}
            >
              <span className="p-2 px-4 border-b-4 border-transparent">
                {t("about.title")}
              </span>
            </button>

            <button
              className={`font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50 ${
                activeSection === "work" ? "text-gray-50" : ""
              }`}
              onClick={() => handleSectionClick("work")}
            >
              <span className="p-2 px-4 border-b-4 border-transparent">
                {t("work.title")}
              </span>
            </button>

            <button
              className={`font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50 ${
                activeSection === "skills" ? "text-gray-50" : ""
              }`}
              onClick={() => handleSectionClick("skill")}
            >
              <span className="p-2 px-4 border-b-4 border-transparent">
                {t("skill.title")}
              </span>
            </button>

            <button
              className={`font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50 hidden ${
                activeSection === "comming" ? "text-gray-50" : ""
              }`}
              onClick={() => handleSectionClick("comming")}
            >
              <span className="p-2 px-4 border-b-4 border-transparent">
                Comming
              </span>
            </button>
          </div>
        </div>
      </header>
      <main>
        {activeSection === "about" && <About />}
        {activeSection === "work" && <Work />}
        {activeSection === "skill" && <Skills />}
      </main>
      <footer className="w-[610px] max-w-full mx-auto py-8">
        <div className="w-full grid place-items-center gap-y-2">
          <div className="flex flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/joao-vitorandrade/"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/andrade_jaum/"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/AndradeJaum"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://open.spotify.com/user/4jsylrelyhxxzqb28vtyj19p4"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaSpotify size={20} />
            </a>
          </div>
          <div>
            João Vitor de Andrade ©<span>2023</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

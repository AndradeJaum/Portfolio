import type { NextPage } from "next";
import { NextSeo } from "next-seo";
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
  FaGuitar,
  FaDog,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher.js";
import { useState } from "react";
import About from "../components/About.js";
import Work from "../components/Work.js";
import Skills from "../components/Skills.js";
import Education from "../components/Education.js";

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const { t } = useTranslation();

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="container min-h-screen max-w-full">
      <NextSeo 
      title={`${t("seo.title")}`}
      description={`${t("seo.description")}`}
      />
      <nav className="flex justify-between p-2 sticky top-0 left-0 z-10 bg-background opacity-60 backdrop:blur-3xl">
        <form className="w-11 h-11 rounded-md flex items-center hover:bg-hover">
          <button
            name="Trade Theme"
            className="hover:bg-background flex items-center gap-1 mx-auto"
          >
            <FaLightbulb size={20} />
          </button>
        </form>
        <div className="w-11 h-11 rounded-md flex items-center hover:bg-background">
          <div className="hover:bg-background flex items-center gap-1 mx-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
      <header className="w-[724px] max-w-full mx-auto">
        <div className="w-full aspect-[3/1] bg-hover"></div>
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
              href="/download/cv.pdf"
              title="Download CV"
              download
              className="border-transparent outline-transparent rounded-full flex gap-x-1 items-center text-Primary px-4 py-2 bg-contrast"
            >
              <span className="font-bold">{t("download")}</span>
            </a>
          </div>
          <h1 className="font-bold text-4xl">João Vitor de Andrade</h1>
          <p className="mb-2 text-base">Full Stack Developer Junior ✨</p>
          <span className="flex gap-x-2 items-center flex-wrap text-Secondary text-base">
            <span className="flex items-center gap-1 hover:text-Primary">
              <FaSuitcase />
              <p className="whitespace-nowrap">{t("status")}</p>
            </span>
            <span className="flex items-center gap-1 hover:text-Primary">
              <FaGlobe />
              <p className="whitespace-nowrap">{t("country")}</p>
            </span>
            <span className="flex items-center gap-1 hover:text-Primary">
              <FaBirthdayCake />
              <p className="whitespace-nowrap">{t("birthday")}</p>
            </span>
            <span className="flex items-center gap-1 hover:text-Primary">
              <FaUser />
              <p className="whitespace-nowrap">{t("pronoun")}</p>
            </span>
            <span className="flex items-center gap-1 hover:text-Primary">
              <FaGuitar />
              <p className="whitespace-nowrap">{t("hobby")}</p>
            </span>
            <span className="flex items-center gap-1 hover:text-Primary">
              <FaDog />
              <p className="whitespace-nowrap">{t("pet")}</p>
            </span>
          </span>
        </div>
        <div className="w-[610px] max-w-full mx-auto my-12 text-base">
          <div className="max-w-full grid grid-flow-col items-center text-Secondary whitespace-nowrap">
            <button
              name={`${t("about.title")}`}
              className={`font-bold grid place-items-center w-full h-full hover:text-Primary ${
                activeSection === "about" ? "text-Primary" : ""
              }`}
              onClick={() => handleSectionClick("about")}
            >
              <span className="p-2 px-4">{t("about.title")}</span>
            </button>

            <button
            name={`${t("work.title")}`}
              className={`font-bold grid place-items-center w-full h-full hover:text-Primary ${
                activeSection === "work" ? "text-Primary" : ""
              }`}
              onClick={() => handleSectionClick("work")}
            >
              <span className="p-2 px-4">{t("work.title")}</span>
            </button>

            <button
            name={`${t("skill.title")}`}
              className={`font-bold grid place-items-center w-full h-full hover:text-Primary ${
                activeSection === "skill" ? "text-Primary" : ""
              }`}
              onClick={() => handleSectionClick("skill")}
            >
              <span className="p-2 px-4">{t("skill.title")}</span>
            </button>

            <button
            name={`${t("education.title")}`}
              className={`font-bold grid place-items-center w-full h-full hover:text-Primary ${
                activeSection === "education" ? "text-Primary" : ""
              }`}
              onClick={() => handleSectionClick("education")}
            >
              <span className="p-2 px-4">{t("education.title")}</span>
            </button>
          </div>
        </div>
      </header>
      <main>
        {activeSection === "about" && <About />}
        {activeSection === "work" && <Work />}
        {activeSection === "skill" && <Skills />}
        {activeSection === "education" && <Education />}
      </main>
      <footer className="w-[610px] max-w-full mx-auto py-8">
        <div className="w-full grid place-items-center gap-y-2">
          <div className="flex flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/joao-vitorandrade/"
              title="Linkedin"
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-hover"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/andrade_jaum/"
              title="Instagram"
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-hover"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com/AndradeJaum"
              title="GitHub"
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-hover"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://open.spotify.com/user/4jsylrelyhxxzqb28vtyj19p4"
              title="Spotify"
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-hover"
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

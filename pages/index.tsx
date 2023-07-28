import type { NextPage } from "next";
import Head from "next/head";
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

const Home: NextPage = () => {
  return (
    <body className="container min-h-screen max-w-full">
      <nav className="flex justify-between p-2 sticky top-0 left-0 z-10 bg-gray-900 opacity-60 backdrop:blur-3xl">
        <form className="w-11 h-11 rounded-md flex items-center hover:bg-gray-700">
          <button className="hover:bg-gray-700 flex items-center gap-1 mx-auto">
            <FaLightbulb />
          </button>
        </form>
        <form className="w-11 h-11 rounded-md flex items-center hover:bg-gray-700">
          <button className="hover:bg-gray-700 flex items-center gap-1 mx-auto">
            <FaGlobe />
            <p>E</p>
          </button>
        </form>
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
              href="https://www.linkedin.com/in/joao-vitorandrade/"
              title="Me siga no Linkedin"
              target="_blanc"
              className="border-transparent outline-transparent rounded-full flex gap-x-1 items-center text-white px-4 py-2 bg-yellow-500"
            >
              <span className="font-bold">Follow</span>
              <FaLinkedin />
            </a>
          </div>
          <h1 className="font-bold text-4xl">João Vitor de Andrade</h1>
          <p className="mb-2 text-base">Full Stack Developer Junior ✨</p>
          <span className="flex gap-x-4 items-center flex-wrap text-gray-600 text-base">
            <span className="flex items-center gap-1">
              <FaSuitcase />
              <p className="whitespace-nowrap">Disponível</p>
            </span>
            <span className="flex items-center gap-1">
              <FaBirthdayCake />
              <p className="whitespace-nowrap">23 de Setembro</p>
            </span>
            <span className="flex items-center gap-1">
              <FaUser />
              <p className="whitespace-nowrap">Ele/dele</p>
            </span>
            <span className="flex items-center gap-1">
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
            </span>
          </span>
        </div>
        <div className="w-[610px] max-w-full mx-auto my-12 text-base">
          <div className="max-w-full grid grid-flow-col auto-cols-[1fr] items-center text-gray-600">
            <button className="font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50">
              <span className="p-2 px-4 border-b-4 border-transparent">
                About
              </span>
            </button>

            <button className="font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50">
              <span className="p-2 px-4 border-b-4 border-transparent">
                Works
              </span>
            </button>

            <button className="font-bold grid place-items-center w-full h-full text-gray-600 hover:text-gray-50">
              <span className="p-2 px-4 border-b-4 border-transparent">
                Skills
              </span>
            </button>

            <button className="font-bold grid place-items-center w-full h-full text-gray-600">
              <span className="p-2 px-4 border-b-4 border-transparent">
                Comming
              </span>
            </button>
          </div>
        </div>
      </header>
      <main></main>
      <footer className="w-[610px] max-w-full mx-auto py-8">
        <div className="w-full grid place-items-center gap-y-2">
          <div className="flex flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/in/joao-vitorandrade/"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/andrade_jaum/"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/AndradeJaum"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaGithub />
            </a>
            <a
              href="https://open.spotify.com/user/4jsylrelyhxxzqb28vtyj19p4"
              title=""
              target="_blank"
              className="w-11 h-11 grid place-items-center rounded-md hover:bg-gray-700"
            >
              <FaSpotify />
            </a>
          </div>
          <div>
            João Vitor de Andrade ©<span>2023</span>
          </div>
        </div>
      </footer>
    </body>
  );
};

export default Home;

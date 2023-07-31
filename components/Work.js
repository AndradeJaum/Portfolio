import Image from "next/image";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[610px] max-w-full mx-auto px-4">
      <div className="">
        <h2 className="text-xl mb-12">{t("work.experience.title")}</h2>

        <div className="w-full flex justify-between mb-12">
          <div className="w-[30%]">
            <p>{t("work.experience.w1.date")}</p>
          </div>
          <div className="w-[65%] grid gap-2">
            <h3 className="text-xl">{t("work.experience.w1.title")}</h3>
            <p>{t("work.experience.w1.function")}</p>
            <span className="text-gray-600 grid grid-flow-col ">
              <span>Wordpress</span>
              <span>Elementor Pro</span>
              <span>SEO</span>
              <span>Html</span>
              <span>Css</span>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between mb-12">
          <div className="w-[30%]">
            <p>{t("work.experience.w2.date")}</p>
          </div>
          <div className="w-[65%] grid gap-2">
            <h3 className="text-xl">{t("work.experience.w2.title")}</h3>
            <p>{t("work.experience.w2.function")}</p>
            <span className="text-gray-600 grid grid-flow-col">
              <span>Photoshop</span>
              <span>Ilustrator</span>
              <span>Figma</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl mb-12">{t("work.sideProjects.title")}</h2>
        <div className="w-full flex justify-between mb-12">
          <div className="w-[47%] grid gap-2">
            <Image
              src="/images/comunismo.png"
              alt={"Projeto Comunismo"}
              height={10}
              width={400}
              className="rounded-md"
            />
            <h3 className="text-xl">{t("work.sideProjects.p1.title")}</h3>
            <p>{t("work.sideProjects.p1.description")}</p>
            <span className="text-gray-600 grid grid-flow-col ">
              <span>Remix</span>
              <span>TS</span>
              <span>React</span>
              <span>Tailwind</span>
              <span>i18n</span>
            </span>
          </div>
          <div className="w-[47%] grid gap-2">
            <Image
              src="/images/toDoList.png"
              alt={"Projeto Quiz web3"}
              height={10}
              width={400}
              className="rounded-md"
            />
            <h3 className="text-xl">{t("work.sideProjects.p2.title")}</h3>
            <p>{t("work.sideProjects.p2.description")} </p>
            <a
              href="https://github.com/AndradeJaum/My-Back-End"
              target="_blank"
              className="text-gray-600 hover:text-gray-50"
            >
              Backend
            </a>
            <span className="text-gray-600 grid grid-flow-col">
              <span>JS</span>
              <span>TS</span>
              <span>Next</span>
              <span>React</span>
              <span>Tailwind</span>
            </span>
          </div>
        </div>

        <div className="w-full flex justify-between mb-12">
          <div className="w-[47%] grid gap-2">
            <Image
              src="/images/statusGG.png"
              alt={"Projeto Status GG"}
              height={10}
              width={400}
              className="rounded-md"
            />
            <h3 className="text-xl">{t("work.sideProjects.p3.title")}</h3>
            <p>{t("work.sideProjects.p3.description")} </p>
            <a
              href="https://github.com/AndradeJaum/My-Back-End"
              target="_blank"
              className="text-gray-600 hover:text-gray-50"
            >
              Backend
            </a>
            <span className="text-gray-600 grid grid-flow-col">
              <span>JS</span>
              <span>React</span>
              <span>Material Ui</span>
              <span>Riot Api</span>
            </span>
          </div>
          <div className="w-[47%] grid gap-2">
            <Image
              src="/images/searchMovie.png"
              alt={"Projeto Search Movie"}
              height={10}
              width={400}
              className="rounded-md"
            />
            <h3 className="text-xl">{t("work.sideProjects.p4.title")}</h3>
            <p>{t("work.sideProjects.p4.description")} </p>
            <span className="text-gray-600 grid grid-flow-col">
              <span>JS</span>
              <span>React</span>
              <span>Imdb Api</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

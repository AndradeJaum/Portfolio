import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[610px] max-w-full mx-auto px-4">
      <div className="grid gap-4 mb-12">
        <h2 className="text-xl mb-4">{t("skill.title")}</h2>
        <div className="w-full flex text-center">
          <div className="w-full grid gap-2">
            <p>Javascript</p>
            <p>Typescript</p>
            <p>React</p>
            <p>Next.js</p>
            <p>HTML</p>
          </div>
          <div className="w-full grid gap-2">
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Docker</p>
            <p>Jest</p>
          </div>
          <div className="w-full grid gap-2">
            <p>CSS</p>
            <p>Tailwind</p>
            <p>Material Ui</p>
            <p>Stitches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

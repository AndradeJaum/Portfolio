import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[610px] max-w-full mx-auto px-4">
      <div className="grid gap-4">
        <h2 className="text-xl font-bold mb-4">{t("about.title")}</h2>
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
    </div>
  );
};

export default About;

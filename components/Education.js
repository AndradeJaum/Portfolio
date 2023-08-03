import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[610px] max-w-full mx-auto px-4">
      <div className="grid gap-4 mb-12">
        <h2 className="text-xl font-bold mb-4">{t("education.title")}</h2>
        <div className="w-full flex justify-between mb-12">
          <div className="w-[30%]">
            <p>{t("education.university.date")}</p>
          </div>
          <div className="w-[65%] grid gap-2">
            <h3 className="text-xl">{t("education.university.name")}</h3>
            <p>{t("education.university.course")}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 mb-12">
        <h2 className="text-xl font-bold mb-4">{t("education.languages.title")}</h2>
        <div className="w-full flex justify-between">
          <div className="w-[30%]">
            <p>{t("education.languages.pt.name")}</p>
          </div>
          <div className="w-[65%]">
            <p>{t("education.languages.pt.level")}</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[30%]">
            <p>{t("education.languages.es.name")}</p>
          </div>
          <div className="w-[65%]">
            <p>{t("education.languages.es.level")}</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[30%]">
            <p>{t("education.languages.en.name")}</p>
          </div>
          <div className="w-[65%]">
            <p>{t("education.languages.en.level")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

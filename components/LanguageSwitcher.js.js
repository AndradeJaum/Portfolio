import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <select onChange={changeLanguage} value={i18n.language} className="">
        <option value="pt">Pt</option>
        <option value="es">Es</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
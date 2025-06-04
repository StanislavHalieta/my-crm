import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("uk")}>UA</button>
      <button onClick={() => i18n.changeLanguage("en")}>GB</button>
      <button onClick={() => i18n.changeLanguage("de")}>DE</button>
      <button onClick={() => i18n.changeLanguage("fr")}>FR</button>
    </div>
  );
};

export default LanguageSwitcher;

import { useTranslation } from "react-i18next";
import { useLanguageStore } from "../store/languageStore";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{t("language.greeting")}</h1>
      <h3>{t("language.HEY")}</h3>
      <button
        onClick={toggleLanguage}
        className="border-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        {t("language.switchTo")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;

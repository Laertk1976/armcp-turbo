import { useTranslation } from "react-i18next";

const HomeText: React.FC = () => {
   const { t, i18n } = useTranslation();
    console.log("Current language:", i18n.language);
  console.log("Resources:", i18n.getDataByLanguage(i18n.language));
  return (
    <div className="text-center">
      {/* <h1 className="text-3xl font-bold">{t("HEY")}</h1> */}
      <p>{t("language.HEY")}</p>
      <p>{t("language.greeting")}</p>
      <p>{t("language.switchTo")}</p>
    </div>
  );
}
export default HomeText;

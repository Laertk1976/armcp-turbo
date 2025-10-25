// import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HomeText from "./components/translationKeeper/translationKeeper";

const App: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <HomeText />
    </div>
  );
};

export default App;

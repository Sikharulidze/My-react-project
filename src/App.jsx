import { Route, Routes } from "react-router-dom";
import "./App.css";
import useScore from "./store/useScore";
import { lazy } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import language_geo from "./locales/geo.json";
import language_eng from "./locales/eng.json";


i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: language_eng,
    },
    geo: {
      translation: language_geo,
    },
  },
  lng: "eng",
  fallbackLng: "eng",

  interpolation: {
    escapeValue: false,
  },
});

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const dark = useScore((state) => state.dark);
  const setDark = useScore((state) => state.switchMode);

  const { t } = useTranslation();

  const languageChangeHandler = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="container">
      <div>
        <header>{t("welcome")}</header>
        <select name="language" id="language" onChange={languageChangeHandler}>
          <option value="eng">Eng</option>
          <option value="geo">GEO</option>
        </select>
        <br />

        {dark ? (
          <button onClick={setDark}>light</button>
        ) : (
          <button onClick={setDark}>dark</button>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

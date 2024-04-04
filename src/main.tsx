import React from "react";
import ReactDOM from "react-dom/client";
import { Resume } from "./Resume";
import resume from "../resume.json";
import "../style.css";
import { I18nextProvider } from "react-i18next";
import { createI18N } from "./i18n";
const language = "es" // Change here the desirable language that you want.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={createI18N(language)}>
      <Resume {...resume} />
    </I18nextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Resume } from "./Resume";
import resume from "../resume.json";
import "../style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Resume {...resume} />
  </React.StrictMode>
);

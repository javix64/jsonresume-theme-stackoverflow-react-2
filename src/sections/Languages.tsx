import React from "react";
import { Language } from "../types";
import { withTranslation, WithTranslation } from "react-i18next";
export const Languages = withTranslation()(
  ({ languages, t }: { languages: Language[] } & WithTranslation) => (
    <>
      {languages.length && (
        <section className="section">
          <header>
            <h2 className="section-title">{t("Languages")}</h2>
          </header>
          <section id="languages">
            <table>
              <thead>
                <tr>
                  <td>
                    <h3>{t("Languages")}</h3>
                  </td>
                  <td>
                    <h3>{t("Speaking")}</h3>
                  </td>
                  <td>
                    <h3>{t("Listening")}</h3>
                  </td>
                  <td>
                    <h3>{t("Reading")}</h3>
                  </td>
                  <td>
                    <h3>{t("Writing")}</h3>
                  </td>
                </tr>
              </thead>
              <tbody>
                {languages.map((l) => {
                  const { language, fluency } = l;
                  const { speaking, listening, reading, writing } = fluency;
                  return (
                    <tr key={language}>
                      <td className="tdh3 trtbody">
                        <h3>{language}</h3>
                      </td>
                      <td>
                        <div
                          className={`level fluency ${speaking.toLowerCase()} tdh3`}
                        >
                          <em>{speaking}</em>
                          <div className="bar"></div>
                        </div>
                      </td>
                      <td>
                        <div
                          className={`level fluency ${listening.toLowerCase()}`}
                        >
                          <em>{listening}</em>
                          <div className="bar"></div>
                        </div>
                      </td>
                      <td>
                        <div
                          className={`level fluency ${reading.toLowerCase()}`}
                        >
                          <em>{reading}</em>
                          <div className="bar"></div>
                        </div>
                      </td>
                      <td>
                        <div
                          className={`level fluency ${writing.toLowerCase()}`}
                        >
                          <em>{writing}</em>
                          <div className="bar"></div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </section>
      )}
    </>
  )
);

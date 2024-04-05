import React from "react";
import { Language } from "../types";
import { withTranslation, WithTranslation } from "react-i18next";
import { HeaderSection } from "../components/HeaderSection";
import { LevelChart } from "../components/LevelChart";
export const Languages = withTranslation()(
  ({ languages, t }: { languages: Language[] } & WithTranslation) => (
    <>
      {languages.length && (
        <section className="section">
          <HeaderSection title="Languages" />
          <section id="languages">
            <table>
              <thead>
                <tr>
                  <td>
                    <h4>{t("Languages")}</h4>
                  </td>
                  <td>
                    <h4>{t("Speaking")}</h4>
                  </td>
                  <td>
                    <h4>{t("Listening")}</h4>
                  </td>
                  <td>
                    <h4>{t("Reading")}</h4>
                  </td>
                  <td>
                    <h4>{t("Writing")}</h4>
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
                        <h4>{language}</h4>
                      </td>
                      <td>
                        <LevelChart name={speaking} />
                      </td>
                      <td>
                        <LevelChart name={listening} />
                      </td>
                      <td>
                        <LevelChart name={reading} />
                      </td>
                      <td>
                        <LevelChart name={writing} />
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

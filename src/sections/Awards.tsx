import React from "react";
import { Award } from "../types";
import { withTranslation, WithTranslation } from "react-i18next";
import { HeaderSection } from "../components/HeaderSection";

export const Awards = withTranslation()(
  ({ awards, t }: { awards: Award[] } & WithTranslation) => (
    <>
      {awards.length > 0 && (
        <section className="section">
          <HeaderSection title="awards" />
          <section id="awards">
            {awards.map((award, index) => (
              <section key={index} className="award-item">
                {award.summary && <label htmlFor={`award-item-${index}`} />}
                <header className="clear">
                  {award.date && (
                    <div className="date">
                      {new Date(award.date).getFullYear()}
                    </div>
                  )}
                  <div className="header-left">
                    {award.title && <div className="title">{award.title}</div>}
                    {award.awarder && (
                      <div className="awarder">{award.awarder}</div>
                    )}
                  </div>
                </header>
                <div className="item">
                  {award.summary && (
                    <div className="summary">{award.summary}</div>
                  )}
                </div>
              </section>
            ))}
          </section>
        </section>
      )}
    </>
  )
);

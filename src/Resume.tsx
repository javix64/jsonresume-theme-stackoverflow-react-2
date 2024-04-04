import React from "react";
import { Resume as ResumeProps } from "./types";
import {
  Basics,
  Volunteer,
  Education,
  Awards,
  Certificates,
  Interests,
  Projects,
  Languages,
  Publications,
  References,
  Skills,
  Work,
} from "./sections";

export const Resume: React.FC<ResumeProps> = (resume) => {
  const {
    basics,
    work,
    projects,
    skills,
    volunteer,
    education,
    awards,
    certificates,
    publications,
    languages,
    interests,
    references,
  } = resume;
  return (
    <>
      <Basics {...basics} />
      <div id="mainContainer">
        <div id="sideContainer">
          {projects && <Projects projects={projects} />}
          {skills && <Skills skills={skills} />}
        </div>
        <div id="resume">
          {work && <Work work={work} />}
          {education && <Education education={education} />}
          {volunteer && <Volunteer volunteer={volunteer} />}
          {awards && <Awards awards={awards} />}
          {certificates && <Certificates certificates={certificates} />}
          {publications && <Publications publications={publications} />}
          {languages && <Languages languages={languages} />}
          {interests && <Interests interests={interests} />}
          {references && <References references={references} />}
        </div>
      </div>
    </>
  );
};

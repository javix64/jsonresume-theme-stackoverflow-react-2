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
    <div id="resume">
      <Basics {...basics} />
      {work && <Work work={work} />}
      {projects && <Projects projects={projects} />}
      {skills && <Skills skills={skills} />}
      {volunteer && <Volunteer volunteer={volunteer} />}
      {education && <Education education={education} />}
      {awards && <Awards awards={awards} />}
      {certificates && (
        <Certificates certificates={certificates} />
      )}
      {publications && (
        <Publications publications={publications} />
      )}
      {languages && <Languages languages={languages} />}
      {interests && <Interests interests={interests} />}
      {references && <References references={references} />}
    </div>
  );
};

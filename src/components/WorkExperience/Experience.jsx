import Title from "../Title/Title.jsx";
import { Divider, Spacer } from "@geist-ui/core";
import setClassName from "../../utils/setClassName.js";
import WorkExperience from "./WorkExperience.jsx";

const Experience = ({ title, works }) => {
  const sectionClassName = setClassName(title);

  return (
    <section className={sectionClassName}>
      <Title text={title} />
      <Divider />
      <Spacer h={2} />
      {works.map((experience) => (
        <WorkExperience key={experience.id} {...experience} />
      ))}
    </section>
  );
};

export default Experience;

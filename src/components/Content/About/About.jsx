import { Divider, Spacer } from "@geist-ui/core";
import Title from "../../Title/Title.jsx";
import ContentText from "../../ContentText/ContentText.jsx";
import { about } from "../../../data/data.jsx";

const About = () => {
  return (
    <section className={"about"}>
      <Title text={"About"} />
      <Divider />
      <Spacer h={1} />
      <ContentText text={about.text} />
      <Spacer h={2} />
    </section>
  );
};

export default About;

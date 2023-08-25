import { Page } from "@geist-ui/core";
import Head from "./Head/Head.jsx";
import About from "./About/About.jsx";
import Experience from "../WorkExperience/Experience.jsx";
import { workExperience } from "../../data/data.jsx";
import Links from "../Links/Links.jsx";
import links from "../../data/links.jsx";

const Content = ({ switchTheme }) => {
  return (
    <>
      <Page.Content>
        <Head switchTheme={switchTheme} />
        <About />
        <Experience title={"Work Experience"} works={workExperience} />
        <Links title={"Links"} data={links} />
      </Page.Content>
    </>
  );
};

export default Content;

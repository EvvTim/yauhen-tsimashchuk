import Work from "../Project/Work.jsx";

const WorkExperience = ({
  company,
  position,
  link,
  description,
  date,
  techStack,
}) => <Work {...{ company, position, link, description, date, techStack }} />;

export default WorkExperience;

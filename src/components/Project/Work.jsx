import { Grid, Link, Spacer } from "@geist-ui/core";
import Date from "../Date/Date.jsx";
import Title from "../Title/Title.jsx";
import Description from "../Description/Description.jsx";
import TechStack from "../TechStack/TechStack.jsx";

const { Container } = Grid;

const Work = ({ date, link, position, company, description, techStack }) => {
  return (
    <>
      <Container
        gap={2}
        justify={"flex-start"}
        style={{
          flexWrap: "wrap",
        }}
      >
        <Grid xs={10} md={6}>
          <Date date={date} />
        </Grid>
        <Grid xs={50} md={18}>
          <Container justify={"flex-start"} xs={100}>
            <Title
              text={
                <Link href={link} underline icon>
                  {`${position} @ ${company}`}
                </Link>
              }
            />
            <Spacer h={1} />
            <Description text={description} />
            <Spacer h={1} />
            <Container justify={"flex-start"} gap={1.5}>
              <TechStack items={techStack} />
            </Container>
          </Container>
        </Grid>
      </Container>
      <Spacer h={3} />
    </>
  );
};

export default Work;

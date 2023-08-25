import Title from "../Title/Title.jsx";
import { Divider, Grid, Link, Spacer, Text, useTheme } from "@geist-ui/core";

const { Container } = Grid;

const Links = ({ title, data }) => {
  const { palette } = useTheme();

  return (
    <section className={`section-${title}`}>
      <Title text={title} />
      <Divider />
      <Container direction={"column"} style={{ marginTop: "1rem" }}>
        <Spacer h={1} />
        {data.map((link) => (
          <Grid key={link.key} xs={20} style={{ marginBottom: "1.2rem" }}>
            <Text
              span
              style={{
                color: palette.accents_5,
              }}
            >
              {link.text}
            </Text>
            <Spacer h={2} />
            <Link icon={true} href={link.url}>
              {link.url}
            </Link>
          </Grid>
        ))}
      </Container>
    </section>
  );
};

export default Links;

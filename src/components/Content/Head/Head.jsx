import { Divider, Spacer, Text, User, useTheme } from "@geist-ui/core";
import avatar from "/avatar.svg";
import ThemeButton from "../../ThemeButton/ThemeButton.jsx";
const { Link } = User;
const Head = ({ switchTheme }) => {
  const theme = useTheme();

  console.log(theme);
  return (
    <section className={"head"}>
      <ThemeButton switchTheme={switchTheme} />
      <Divider />
      <Spacer h={1} />
      <User
        unit={"3 rem"}
        scale={10}
        font={"1.4rem"}
        src={avatar}
        name={
          <Text
            h1
            font={"20px"}
            style={{
              margin: 0,
            }}
          >
            Yauhen Tsimashchuk
          </Text>
        }
      >
        JavaScript Developer
        <Link href={"https://gitlab.com/EvvTim"}>GitLab</Link>
      </User>
      <Spacer h={1} />
      <Spacer h={5} />
    </section>
  );
};

export default Head;

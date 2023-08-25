import { Button, useTheme } from "@geist-ui/core";
import { Sun, Moon } from "@geist-ui/icons";

const ThemeButton = ({ switchTheme }) => {
  const { type } = useTheme();
  return (
    <>
      <Button
        auto
        ghost
        scale={1}
        px={0.9}
        style={{
          position: "relative",
          right: "10px",
          top: "80px",
          zIndex: "100",
        }}
        icon={type === "dark" ? <Moon /> : <Sun />}
        onClick={() => {
          switchTheme();
        }}
      />
    </>
  );
};

export default ThemeButton;

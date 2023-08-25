import { Text, useTheme } from "@geist-ui/core";

const ContentText = ({ text }) => {
  const { palette } = useTheme();
  return (
    <>
      <Text
        p
        style={{
          color: palette.accents_5,
          margin: "0",
        }}
      >
        {text}
      </Text>
    </>
  );
};

export default ContentText;

import { Text, useTheme } from "@geist-ui/core";

const Description = ({ text }) => {
  const { palette } = useTheme();
  return (
    <Text
      span
      style={{
        color: palette.accents_5,
      }}
    >
      {text}
    </Text>
  );
};

export default Description;

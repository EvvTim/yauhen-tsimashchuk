import { Text, useTheme } from "@geist-ui/core";

const Date = ({ date }) => {
  const { palette } = useTheme();
  return (
    <>
      <Text
        span
        style={{
          color: palette.accents_5,
        }}
      >
        {date}
      </Text>
    </>
  );
};

export default Date;

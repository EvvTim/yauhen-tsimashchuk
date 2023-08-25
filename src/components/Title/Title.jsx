import { Text } from "@geist-ui/core";

const Title = ({ text }) => {
  return (
    <>
      <Text
        p
        style={{
          margin: "0",
        }}
      >
        {text}
      </Text>
    </>
  );
};

export default Title;

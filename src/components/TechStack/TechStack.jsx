import { Grid, Tag } from "@geist-ui/core";
import { Fragment } from "react";

const TechStack = ({ items }) => (
  <>
    {items.map((item, index) => (
      <Fragment key={index}>
        <Grid>
          <Tag type="success">{item}</Tag>
        </Grid>
      </Fragment>
    ))}
  </>
);

export default TechStack;

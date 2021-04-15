import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  BasicShowBox,
  BasicShowBoxProps,
} from "../components/shared/BasicShowBox";

export default {
  title: "Basic/Show Box",
  component: BasicShowBox,
} as Meta;

const Template: Story<BasicShowBoxProps> = (args) => <BasicShowBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Value",
};

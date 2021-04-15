import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  BasicMultiSelct,
  BasicMultiSelctProps,
} from "../components/shared/BasicMultiSelct";

export default {
  title: "Basic/Multi Select",
  component: BasicMultiSelct,
} as Meta;

const Template: Story<BasicMultiSelctProps> = (args) => (
  <BasicMultiSelct {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Options",
  options: ["option-1", "option-2", "option-3"],
  chosenOptions: ["option-1"],
  handler: () => ({}),
};

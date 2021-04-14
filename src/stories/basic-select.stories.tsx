import React from "react";
import { Story, Meta } from "@storybook/react";

import { BasicSelct, BasicSelectProps } from "../components/shared/BasicSelct";

export default {
  title: "Basic/Select",
  component: BasicSelct,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BasicSelectProps> = (args) => <BasicSelct {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Options",
  options: ["option-1", "option-2", "option-3"],
  chosenOption: "option-1",
  handler: () => ({}),
};

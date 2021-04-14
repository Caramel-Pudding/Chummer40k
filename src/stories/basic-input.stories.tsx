import React from "react";
import { Story, Meta } from "@storybook/react";

import { BasicInput, BasicInputProps } from "../components/shared/BasicInput";

export default {
  title: "Basic/Input",
  component: BasicInput,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<BasicInputProps> = (args) => <BasicInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Name",
  value: "",
  handler: () => ({}),
};

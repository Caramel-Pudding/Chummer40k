import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  BasicCheckbox,
  BasicCheckboxProps,
} from "../components/shared/BasicCheckbox";

export default {
  title: "Basic/Checkbox",
  component: BasicCheckbox,
} as Meta;

const Template: Story<BasicCheckboxProps> = (args) => (
  <BasicCheckbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Switch",
  checked: true,
  handler: () => ({}),
};

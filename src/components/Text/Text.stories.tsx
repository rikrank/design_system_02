import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "../Text/Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

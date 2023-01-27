import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputComponent from "./InputComponent";

import "../../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/InputComponent",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

export const InputTextComponentView: ComponentStory<
  typeof InputComponent
> = (args) => <InputComponent {...args} />;

InputTextComponentView.args = {
  label: 'Label',
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxComponent from "./CheckboxComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/CheckboxComponent",
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;

export const CheckboxComponentView: ComponentStory<typeof CheckboxComponent> = (
  args
) => <CheckboxComponent {...args} />;

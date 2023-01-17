import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "./TableComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/TableComponent",
  component: Table,
} as ComponentMeta<typeof Table>;

export const TableComponentView: ComponentStory<
  typeof Table
> = (args) => (
  <Table {...args}>
  </Table>
);

TableComponentView.args = {
};

import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";

import UserTableComponent from "./UserTableComponent";

import "../../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/TableComponent',
  component: UserTableComponent,
} as ComponentMeta<typeof UserTableComponent>;

const data = [
  {
    status: false,
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "555-555-5555",
    nationality: "American"
  },
  {
    status: false,
    firstname: "Jane",
    lastname: "Smith",
    email: "janesmith@gmail.com",
    phoneNumber: "555-555-5556",
    nationality: "Canadian"
  },
  {
    status: false,
    firstname: "Bob",
    lastname: "Johnson",
    email: "bobjohnson@gmail.com",
    phoneNumber: "555-555-5557",
    nationality: "British"
  },
  {
    status: false,
    firstname: "Emma",
    lastname: "Williams",
    email: "emmawilliams@gmail.com",
    phoneNumber: "555-555-5558",
    nationality: "Australian"
  },
  {
    status: true,
    firstname: "Michael",
    lastname: "Brown",
    email: "michaelbrown@gmail.com",
    phoneNumber: "555-555-5559",
    nationality: "German"
  },
  {
    status: true,
    firstname: "Jacob",
    lastname: "Garcia",
    email: "jacobgarcia@gmail.com",
    phoneNumber: "555-555-5561",
    nationality: "Spanish"
  },
  {
    status: true,
    firstname: "Isabella",
    lastname: "Miller",
    email: "isabellamiller@gmail.com",
    phoneNumber: "555-555-5562",
    nationality: "Italian"
  },
  {
    status: true,
    firstname: "Ethan",
    lastname: "Davis",
    email: "ethandavis@gmail.com",
    phoneNumber: "555-555-5563",
    nationality: "Dutch"
  }
]

export const TableComponentView: ComponentStory<
  typeof UserTableComponent
> = (args) => (
  <UserTableComponent {...args}>
  </UserTableComponent>
);

TableComponentView.args = {
  data: data,
};

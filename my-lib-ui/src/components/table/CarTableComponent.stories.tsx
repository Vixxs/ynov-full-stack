import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import "../../index.css";
import CarTableComponent from "./CarTableComponent";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/TableComponent',
  component: CarTableComponent,
} as ComponentMeta<typeof CarTableComponent>;

const data = [
  {
    brand: "Toyota",
    model: "Corolla",
    price: 20000,
    image: "https://kong-proxy-aws.toyota-europe.com/c1-images/resize/ccis/680x680/png/fr/configurationtype/visual-for-grade-selector/product-token/98a840fa-1050-490a-8cdc-d49bdf535add/grade/d8c6f6a1-c6ae-465d-9283-bbb9bb6e6a58/body/7b77d85b-8f26-4645-82ac-22154a7d6293/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4_040.webp",
  },
  {
    brand: "Toyota",
    model: "Camry",
    price: 25000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerEXuD9nwzpdp3dWKWt9qIKxMduhpTu-Cyg&usqp=CAU",
  },
  {
    brand: "Toyota",
    model: "Prius",
    price: 30000,
    image: "https://www.france-attelage.com/c/3643-category_default/prius-iv-diesel-essence-a-partir-de-septembre-2015.jpg",
  },
  {
    brand: "Toyota",
    model: "RAV4",
    price: 35000,
    image: "data:image/jpeg;base64,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",
  }
]


export const CarTableComponentView: ComponentStory<
  typeof CarTableComponent
> = (args) => (
  <CarTableComponent {...args}>
  </CarTableComponent>
);

CarTableComponentView.args = {
  data: data,
};
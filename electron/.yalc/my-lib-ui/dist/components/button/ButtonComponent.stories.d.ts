import React from "react";
import { ComponentStory } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";
import "../../index.css";
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactFramework, React.PropsWithChildren<React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}>>;
export default _default;
export declare const ButtonComponentView: ComponentStory<typeof ButtonComponent>;

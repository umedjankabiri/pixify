import { Meta, StoryObj } from "@storybook/react";
import { Button } from "common/components/Button/Button.tsx";
import "common/components/Button/Button.module.css";

const meta = {
  title: "Button component",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "outlined"],
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    asChild: false,
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    asChild: false,
  },
};
export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
    asChild: false,
  },
};
export const LinkAsButton: Story = {
  args: {
    variant: "outlined",
    children: (
      <a href={"/sign-up"} target={"_blank"} rel="noopener noreferrer">
        Sign Up
      </a>
    ),
    asChild: true,
  },
};

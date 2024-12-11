import { Meta, StoryObj } from "@storybook/react";
import { Button } from "common/components/Button/Button.tsx";
import "common/components/Button/Button.module.css";

const meta = {
  title: "Button component",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "outlined"],
    },
  },
  args: {
    variant: "primary",
    children: "Primary Button",
    asChild: false,
  },
};
export const Secondary: Story = {
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "outlined"],
    },
  },
  args: {
    variant: "secondary",
    children: "Secondary Button",
    asChild: false,
  },
};
export const Outlined: Story = {
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "outlined"],
    },
  },
  args: {
    variant: "outlined",
    children: "Outlined Button",
    asChild: false,
  },
};
export const LinkAsButton: Story = {
  args: {
    variant: "outlined",
    children: <a href={"/sign-up"}>Sign Up</a>,
    asChild: false,
  },
};
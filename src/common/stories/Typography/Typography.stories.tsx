import { Typography } from "common/components/Typography/Typography.tsx";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Typography component",
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "body1",
        "body2",
        "subtitle1",
        "subtitle2",
        "caption",
        "overline",
        "link1",
        "link2",
      ],
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "error", "warning", "success"],
    },
    align: {
      control: {
        type: "radio",
      },
      options: ["inherit", "left", "center", "right", "justify", "initial", "unset"],
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "align",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DemonstrationTypographyComponent: Story = {
  args: {
    variant: "h1",
    children: "Typography component",
    asChild: false,
  },
};

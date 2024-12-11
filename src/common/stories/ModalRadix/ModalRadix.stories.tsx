import { Meta, StoryObj } from "@storybook/react";
import { ModalRadix } from "common/components/ModalRadix/ModalRadix.tsx";
import { action } from "@storybook/addon-actions";
import { useState } from "react";

const meta = {
  title: "ModalRadix",
  component: ModalRadix,
  tags: ["autodocs"],
  argTypes: {
    open: { control: { type: "boolean" } },
    onClose: { action: "onClose" },
    title: { control: "text" },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    children: { control: "text" },
  },
} satisfies Meta<typeof ModalRadix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalSmallSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    const handleClose = () => {
      setIsOpen(false);
      action("onClose")();
    };

    return <ModalRadix {...args} open={isOpen} onClose={handleClose} />;
  },
  args: {
    open: true,
    onClose: action("onClose"),
    title: "Modal title",
    size: "small",
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda consequatur cumque ea fugiat
        illum inventore ipsam itaque non numquam, quasi quidem quisquam, quos rerum saepe voluptate? Dolor, sit?
      </div>
    ),
  },
};
export const ModalMediumSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    const handleClose = () => {
      setIsOpen(false);
      action("onClose")();
    };

    return <ModalRadix {...args} open={isOpen} onClose={handleClose} />;
  },
  args: {
    open: true,
    onClose: action("onClose"),
    title: "Modal title",
    size: "medium",
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda consequatur cumque ea fugiat
        illum inventore ipsam itaque non numquam, quasi quidem quisquam, quos rerum saepe voluptate? Dolor, sit?
      </div>
    ),
  },
};
export const ModalLargeSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open);
    const handleClose = () => {
      setIsOpen(false);
      action("onClose")();
    };

    return <ModalRadix {...args} open={isOpen} onClose={handleClose} />;
  },
  args: {
    open: true,
    onClose: action("onClose"),
    title: "Modal title",
    size: "large",
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda consequatur cumque ea fugiat
        illum inventore ipsam itaque non numquam, quasi quidem quisquam, quos rerum saepe voluptate? Dolor, sit?
      </div>
    ),
  },
};

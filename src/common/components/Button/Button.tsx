import { FC } from "react";
import { ButtonProps } from "common/types/ButtonProps/ButtonProps.ts";
import stl from "common/components/Button/Button.module.css";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export const Button: FC<ButtonProps> = ({ variant = "primary", className, asChild, ...restProps }) => {
  const Component = asChild ? Slot : "button";
  return <Component className={clsx(stl.button, stl[variant], className)} {...restProps} />;
};

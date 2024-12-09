import { FC } from "react";
import { ButtonProps } from "common/types/ButtonProps/ButtonProps.ts";
import stl from "common/components/Button/Button.module.css";
import { clsx } from "clsx";

export const Button: FC<ButtonProps> = ({ variant = "primary", className, ...restProps }) => {
  return <button className={clsx(stl.button, stl[variant], className)} {...restProps} />;
};

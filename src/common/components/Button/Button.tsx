import { FC } from "react";
import { ButtonProps } from "common/types/ButtonProps/ButtonProps.ts";
import stl from "./Button.module.css";

export const Button: FC<ButtonProps> = ({ variant = "primary", className, ...restProps }) => {
  return (
    <button
      className={`${stl.button}
    ${variant === "primary" ? stl.primary : ""}
    ${variant === "secondary" ? stl.secondary : ""}
    ${variant === "outlined" ? stl.outlined : ""}
    ${className}
  `}
      {...restProps}
    />
  );
};

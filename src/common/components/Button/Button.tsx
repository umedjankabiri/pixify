import { FC } from "react";
import { ButtonProps } from "common/types/ButtonProps/ButtonProps.ts";

export const Button: FC<ButtonProps> = ({ ...restProps }) => {
  return <button {...restProps} />;
};

import { FC } from "react";
import { ButtonProps } from "common/types/ButtonProps/ButtonProps.ts";

export const Button: FC<ButtonProps> = ({ className, title, type, children, disabled, onClick }) => {
  return (
    <button className={className} type={type} disabled={disabled} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

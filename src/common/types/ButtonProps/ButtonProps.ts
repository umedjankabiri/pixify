import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  title?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

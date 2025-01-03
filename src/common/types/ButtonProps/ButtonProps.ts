import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outlined";
export type ButtonProps = {
  variant?: ButtonVariant;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;

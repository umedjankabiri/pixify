import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "outlined";
  asChild?: boolean;
} & ComponentPropsWithoutRef<"button">;

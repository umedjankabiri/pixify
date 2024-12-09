import { ComponentPropsWithoutRef } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "outlined";
} & ComponentPropsWithoutRef<"button">;

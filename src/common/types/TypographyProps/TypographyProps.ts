import React, { ComponentPropsWithoutRef } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "Body1"
  | "Body2"
  | "Subtitle1"
  | "Subtitle2"
  | "Caption"
  | "Overline"
  | "Link1"
  | "Link2";
type TypographyColors = "primary" | "secondary" | "error" | "warning" | "success";
type TypographyAlign = "inherit" | "left" | "center" | "right" | "justify" | "initial" | "unset";
export type TypographyProps = {
  variant?: TypographyVariant;
  color?: TypographyColors;
  align?: TypographyAlign;
  children?: React.ReactNode;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"div">;

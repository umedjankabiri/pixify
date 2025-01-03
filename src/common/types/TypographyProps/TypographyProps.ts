import { ComponentPropsWithoutRef } from "react";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "overline"
  | "link1"
  | "link2";
type TypographyColors = "primary" | "secondary" | "error" | "warning" | "success";
type TypographyAlign = "inherit" | "left" | "center" | "right" | "justify" | "initial" | "unset";
export type TypographyProps = {
  variant?: TypographyVariant;
  color?: TypographyColors;
  align?: TypographyAlign;
  asChild?: boolean;
} & ComponentPropsWithoutRef<"div">;

import { FC } from "react";
import { TypographyProps } from "common/types/TypographyProps/TypographyProps.ts";
import stl from "common/components/Typography/Typography.module.css";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export const Typography: FC<TypographyProps> = ({
  className,
  variant = "Body1",
  color = "primary",
  align = "left",
  children,
  asChild,
  ...restProps
}) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={clsx(
        stl.typography,
        stl[`typography-variant--${variant}`],
        stl[`typography-color--${color}`],
        stl[`typography-align--${align}`],
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

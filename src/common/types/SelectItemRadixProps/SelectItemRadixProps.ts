import { ComponentPropsWithoutRef, ReactNode } from "react";
import * as Select from "@radix-ui/react-select";

export type SelectItemRadixProps = {
  className?: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<typeof Select.Item>;

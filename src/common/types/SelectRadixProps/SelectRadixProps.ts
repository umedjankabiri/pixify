import { ComponentPropsWithoutRef } from "react";
import * as Select from "@radix-ui/react-select";

export type SelectRadixProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Select.Trigger>;

import * as Select from "@radix-ui/react-select";
import clsx from "clsx";
import { SelectItemRadixProps } from "common/types/SelectItemRadixProps/SelectItemRadixProps.ts";
import { forwardRef } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import stl from "common/components/SelectRadix/SelectItemRadix/SelectItemRadix.module.css";

export const SelectItemRadix = forwardRef<HTMLDivElement, SelectItemRadixProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={clsx(stl.Item, className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={stl.ItemIndicator}>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

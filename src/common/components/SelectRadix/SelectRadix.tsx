import { FC } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import stl from "common/components/SelectRadix/SelectRadix.module.css";
import { SelectItemRadix } from "common/components/SelectRadix/SelectItemRadix/SelectItemRadix.tsx";
import { SelectRadixProps } from "common/types/SelectRadixProps/SelectRadixProps.ts";
import { clsx } from "clsx";
import { Typography } from "common/components/Typography/Typography.tsx";

export const SelectRadix: FC<SelectRadixProps> = ({ className }) => {
  return (
    <div className={stl.selectWrapper}>
      <label htmlFor="select" className={stl.selectLabel}>
        <Typography variant={"body2"} color={"secondary"}>
          some text
        </Typography>
      </label>
      <Select.Root>
        <Select.Trigger className={clsx(stl.Trigger, className)} aria-label="Food">
          <Select.Value placeholder="Select a fruit…" />
          <Select.Icon className={stl.Icon}>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={stl.Content}>
            <Select.ScrollUpButton className={stl.ScrollButton}>
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className={stl.Viewport}>
              <Select.Group>
                <Select.Label className={stl.Label}>Fruits</Select.Label>
                <SelectItemRadix value="apple">Apple</SelectItemRadix>
                <SelectItemRadix value="banana">Banana</SelectItemRadix>
                <SelectItemRadix value="blueberry">Blueberry</SelectItemRadix>
                <SelectItemRadix value="grapes">Grapes</SelectItemRadix>
                <SelectItemRadix value="pineapple">Pineapple</SelectItemRadix>
              </Select.Group>

              <Select.Separator className={stl.Separator} />

              <Select.Group>
                <Select.Label className={stl.Label}>Vegetables</Select.Label>
                <SelectItemRadix value="aubergine">Aubergine</SelectItemRadix>
                <SelectItemRadix value="broccoli">Broccoli</SelectItemRadix>
                <SelectItemRadix value="carrot" disabled>
                  Carrot
                </SelectItemRadix>
                <SelectItemRadix value="courgette">Courgette</SelectItemRadix>
                <SelectItemRadix value="leek">Leek</SelectItemRadix>
              </Select.Group>

              <Select.Separator className={stl.Separator} />

              <Select.Group>
                <Select.Label className={stl.Label}>Meat</Select.Label>
                <SelectItemRadix value="beef">Beef</SelectItemRadix>
                <SelectItemRadix value="chicken">Chicken</SelectItemRadix>
                <SelectItemRadix value="lamb">Lamb</SelectItemRadix>
                <SelectItemRadix value="pork">Pork</SelectItemRadix>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className={stl.ScrollButton}>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

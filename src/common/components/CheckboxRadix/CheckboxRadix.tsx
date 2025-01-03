import { FC } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { CheckboxRadixProps } from "common/types/CheckboxRadixProps/CheckboxRadixProps.ts";
import stl from "common/components/CheckboxRadix/Checkbox.module.css";
import { clsx } from "clsx";

export const CheckboxRadix: FC<CheckboxRadixProps> = ({ className, checked, setChecked }) => {
  const handleChecked = (checked: boolean) => setChecked(checked);

  return (
    <div className={stl.checkContainer}>
      <div className={stl.circle}>
        <Checkbox.Root className={clsx(stl.Root, className)} checked={checked} onCheckedChange={handleChecked}>
          <Checkbox.Indicator className={stl.Indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label className={stl.Label}>Accept terms and conditions.</label>
    </div>
  );
};

import * as RadioGroup from "@radix-ui/react-radio-group";
import stl from "common/components/RadioGroupRadix/RadioGroupRadix.module.css";

export const RadioGroupRadix = () => {
  return (
    <RadioGroup.Root className={stl.Root} defaultValue="default" aria-label="View density">
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className={stl.Item} value="default" id="r1">
          <RadioGroup.Indicator className={stl.Indicator} />
        </RadioGroup.Item>
        <label className={stl.Label} htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadioGroup.Item className={stl.Item} value="comfortable" id="r2">
          <RadioGroup.Indicator className={stl.Indicator} />
        </RadioGroup.Item>
        <label className={stl.Label} htmlFor="r2">
          Comfortable
        </label>
      </div>
    </RadioGroup.Root>
  );
};

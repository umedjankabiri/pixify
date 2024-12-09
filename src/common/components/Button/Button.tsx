import { forwardRef } from "react";
import { ButtonProps, ButtonRef } from "common/types/ButtonProps/ButtonProps.ts";

export const Button = forwardRef<ButtonRef, ButtonProps>(({ ...restProps }, ref) => {
  return <button ref={ref} {...restProps} />;
});

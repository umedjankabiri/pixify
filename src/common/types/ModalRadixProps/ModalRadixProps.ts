import { ComponentPropsWithoutRef } from "react";

export type ModalSize = "small" | "medium" | "large";
export type ModalRadixProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  size?: ModalSize;
} & ComponentPropsWithoutRef<"div">;

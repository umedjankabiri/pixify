import { ReactNode } from "react";

export type ModalRadixProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
};

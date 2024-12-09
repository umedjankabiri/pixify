import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import stl from "common/components/ModalRadix/ModalRadix.module.css";
import { FC } from "react";
import { ModalRadixProps } from "common/types/ModalRadixProps/ModalRadixProps.ts";

export const ModalRadix: FC<ModalRadixProps> = ({ open, onClose, children, title }) => (
  <Dialog.Root open={open} onOpenChange={onClose}>
    <Dialog.Portal>
      <Dialog.Overlay className={stl.Overlay} />
      <Dialog.Content className={stl.Content}>
        <Dialog.Title className={stl.Title}>{title}</Dialog.Title>
        <hr />
        {children}
        <Dialog.Close asChild>
          <button className={stl.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

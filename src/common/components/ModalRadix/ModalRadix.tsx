import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import stl from "common/components/ModalRadix/ModalRadix.module.css";
import { FC } from "react";
import { ModalRadixProps } from "common/types/ModalRadixProps/ModalRadixProps.ts";
import { clsx } from "clsx";

export const ModalRadix: FC<ModalRadixProps> = ({
  open,
  onClose,
  children,
  title,
  size = "medium",
  className,
  ...restProps
}) => (
  <Dialog.Root open={open} onOpenChange={onClose} {...restProps}>
    <Dialog.Portal>
      <Dialog.Overlay className={stl.Overlay} />
      <Dialog.Content className={clsx(stl.Content, stl[size], className)}>
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

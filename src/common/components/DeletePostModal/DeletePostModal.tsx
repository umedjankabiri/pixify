import { FC } from "react";
import { DeletePostModalProps } from "common/types/DeletePostModalProps/DeletePostModalProps.ts";
import { ModalRadix } from "common/components/ModalRadix/ModalRadix.tsx";
import { Button } from "common/components/Button/Button.tsx";

export const DeletePostModal: FC<DeletePostModalProps> = ({ open, onClose }) => {
  return (
    <ModalRadix open={open} onClose={onClose} title={"Delete Post"}>
      Are you sure you want to delete this post?
      <div>
        <Button onClick={onClose}>Yes</Button>
        <Button onClick={onClose}>No</Button>
      </div>
    </ModalRadix>
  );
};

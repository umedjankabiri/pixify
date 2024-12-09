import { FC } from "react";
import { DeletePostModalProps } from "common/types/DeletePostModalProps/DeletePostModalProps.ts";
import { ModalRadix } from "common/components/ModalRadix/ModalRadix.tsx";

export const DeletePostModal: FC<DeletePostModalProps> = ({ open, onClose }) => {
  return (
    <ModalRadix open={open} onClose={onClose} title={"Delete Post"}>
      Are you sure you want to delete this post?
      <div>
        <button onClick={onClose}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </ModalRadix>
  );
};

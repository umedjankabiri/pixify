import { FC, ReactNode } from "react";
import stl from "common/components/Modal/Modal.module.css";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  modalTitle: string;
  onClose?: () => void;
  children?: ReactNode;
};

export const Modal: FC<Props> = ({ open, modalTitle, children, onClose }) => {
  return (
    <>
      {open && (
        <>
          {createPortal(
            <div className={stl.overlay}>
              <div className={stl.content}>
                <h3 className={stl.title}>{modalTitle}</h3>
                <hr />
                {children}
                <button className={stl.closeIcon} onClick={onClose}>
                  x
                </button>
              </div>
            </div>,
            document.body
          )}
        </>
      )}
    </>
  );
};

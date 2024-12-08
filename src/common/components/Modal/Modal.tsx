import { FC } from "react";
import stl from "common/components/Modal/Modal.module.css";

type Props = {
  open: boolean;
  onClose?: () => void;
};
export const Modal: FC<Props> = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <div className={stl.overlay}>
          <div className={stl.content}>
            <h3 className={stl.title}>Cart</h3>
            <hr />
            <ul>
              <li>1 товар</li>
              <li>2 товар</li>
              <li>3 товар</li>
            </ul>
            <button className={stl.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};

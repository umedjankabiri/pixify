import { useState } from "react";
import { Modal } from "common/components/Modal/Modal.tsx";

export const Card = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Cart</button>
      {showModal && (
        <Modal open={showModal} modalTitle={"Card"} onClose={() => setShowModal(false)}>
          <ul>
            <li>1 товар</li>
            <li>2 товар</li>
            <li>3 товар</li>
          </ul>
        </Modal>
      )}
    </>
  );
};

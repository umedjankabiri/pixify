import { useState } from "react";
import { Modal } from "common/components/Modal/Modal.tsx";

export const Card = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Cart</button>
      {showModal && <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>}
    </>
  );
};

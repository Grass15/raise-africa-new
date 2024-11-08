// components/Modal.tsx
import React from "react";

type ModalProps = {
  message: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="font-bold text-lg">Success!</h2>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={onClose} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

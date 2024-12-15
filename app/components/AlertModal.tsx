import React from "react";

interface AlertModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-secondary rounded-lg shadow-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-bold mb-4">{message}</h3>
        <div className="flex justify-end space-x-4">
          <button className="btn btn-outline btn-error" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;

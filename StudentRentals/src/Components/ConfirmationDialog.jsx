import React from "react";
import "../CSS/ConfirmationDialog.css";

function ConfirmationDialog({ isOpen, onClose, onConfirm }) {
  return (
    <>
      {isOpen && (
        <div className="confirmation-dialog">
          <div className="confirmation-dialog-content">
            <p>Are you sure you want to confirm the payment?</p>
            <div className="confirmation-buttons">
              <button onClick={onClose}>Cancel</button>
              <button onClick={onConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmationDialog;

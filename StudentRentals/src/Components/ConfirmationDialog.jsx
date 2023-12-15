import React from "react";
import PropTypes from "prop-types";
import "../CSS/ConfirmationDialog.css";

function ConfirmationDialog({ isOpen, onClose, onConfirm, message }) {
  return (
    <>
      {isOpen && (
        <div className="confirmation-dialog">
          <div className="confirmation-dialog-content">
            <p>{message}</p>
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

ConfirmationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmationDialog;

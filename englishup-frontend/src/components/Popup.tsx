import React from 'react';

interface PopupProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Popup({ type, message, onClose }: PopupProps) {
  return (
    <div className="popup-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{zIndex: 9999, background: 'rgba(0,0,0,0.35)'}}>
      <div className={`popup-content card shadow-lg rounded-4 p-4 text-center bg-white bg-opacity-90 border-0 animate-in`} style={{ minWidth: 320, maxWidth: 400 }}>
        <div className="mb-3">
          {type === 'success' ? (
            <i className="bi bi-check-circle-fill text-success fs-1"></i>
          ) : (
            <i className="bi bi-x-circle-fill text-danger fs-1"></i>
          )}
        </div>
        <div className={`fw-semibold fs-5 mb-2 ${type === 'success' ? 'text-success' : 'text-danger'}`}>{type === 'success' ? '¡Éxito!' : 'Error'}</div>
        <div className="mb-3 text-dark fw-normal">{message}</div>
        <button className={`btn btn-${type === 'success' ? 'success' : 'danger'} btn-lg w-100 fw-semibold shadow-sm`} onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

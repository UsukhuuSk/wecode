import React, { ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  width?: number;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, width = 620 }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-[24px] shadow-lg p-6 text-black" style={{ width }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 6.293l2.646-2.647a.5.5 0 1 1 .708.708L8.707 7l2.647 2.646a.5.5 0 0 1-.708.708L8 7.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 7 4.646 4.646a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};




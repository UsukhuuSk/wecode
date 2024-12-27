import { Cancel01Icon, ClosedCaptionIcon } from "@hugeicons/react";
import React, { ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
  width?: number;
  showHeader?: boolean
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, width = 620, showHeader = true }) => {
  if (!isOpen) return null;

  const DialogHeader = () => {
    if (!showHeader) return <></>
    return (
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <Cancel01Icon />
        </button>
      </div>
    )
  }

  const DialogBody = () => {

    return (
      <div className="bg-white rounded-[24px] shadow-lg p-6 text-black max-w-[90%] " style={{ width }}>
        {DialogHeader()}
        <div>{children ? children : null}</div>
      </div>
    )
  }
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-start  bg-gray-500 bg-opacity-75 z-[800]">
      <div className="h-40" style={{ width }}>
      </div>
      {DialogBody()}
    </div>
  );
};




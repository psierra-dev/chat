import React, { useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    event.stopPropagation();
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md" ref={modalRef}>
        <button
          className="absolute text-lg hover:bg-neutral-200 rounded-full  top-2 right-2"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <BiX />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

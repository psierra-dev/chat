import React, { useEffect, useRef } from "react";

interface ClickOutsideComponentProps {
  onClose: () => void;
  children: React.ReactNode;
}

const ClickOutsideComponent: React.FC<ClickOutsideComponentProps> = ({
  onClose,
  children,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return <div ref={componentRef}>{children}</div>;
};

export default ClickOutsideComponent;

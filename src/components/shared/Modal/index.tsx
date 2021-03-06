import React from "react";
import classnames from "classnames";

interface ModalProps {
  isOpen: boolean;
  classNames?: string;
}

export const Modal: React.FC<ModalProps> = React.memo(
  ({ children, isOpen, classNames = "" }) => {
    if (isOpen) {
      return (
        <div
          className={classnames(
            "flex",
            "flex-col",
            "z-10",
            "top-1/2",
            "left-1/2",
            "transform",
            "-translate-x-1/2",
            "-translate-y-1/2",
            "fixed",
            "p-4",
            "bg-gray-600",
            "shadow-md",
            classNames
          )}
        >
          {children}
        </div>
      );
    }
    return null;
  }
);

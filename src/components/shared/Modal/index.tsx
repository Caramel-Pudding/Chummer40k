import React, { FC, memo, Dispatch, SetStateAction, useRef } from "react";
import { MdClose } from "react-icons/md";
import classnames from "classnames";

import { useCloseOnOutsideClick } from "@/hooks/close-on-outside-click";

interface ModalProps {
  // TODO: This doesn't seem to be a good design choise
  readonly outerModalHandler: Dispatch<SetStateAction<boolean>>;
  readonly isOpen: boolean;
  readonly classNames?: string;
}

export const Modal: FC<ModalProps> = memo(
  ({ children, isOpen, outerModalHandler, classNames = "" }) => {
    const modal = useRef<HTMLDivElement>(null);
    useCloseOnOutsideClick(outerModalHandler, isOpen, modal);

    if (isOpen) {
      return (
        <div
          ref={modal}
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
            "whitespace-nowrap",
            "shadow-md",
            classNames
          )}
        >
          <div
            className={classnames(
              "flex",
              "flex-row",
              "justify-end",
              "cursor-pointer",
              "text-white",
              "mb-2"
            )}
          >
            <MdClose onClick={() => outerModalHandler(false)} />
          </div>

          {children}
        </div>
      );
    }
    return null;
  }
);

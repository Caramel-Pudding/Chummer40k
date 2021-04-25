import React, { FC, memo, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classnames from "classnames";

import { useCloseOnOutsideClick } from "@/hooks/close-on-outside-click";
import { routes } from "./consts";

export const LeftHeaderHalf: FC = memo(() => {
  const currentPath = useRouter().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  useCloseOnOutsideClick(setIsOpen, isOpen, dropdown);

  return (
    <div ref={dropdown}>
      <button
        className={classnames("text-white")}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1>
          {routes
            .find((route) => route.url === currentPath)
            ?.name.toUpperCase()}
        </h1>
      </button>
      {isOpen && (
        <ul className={classnames("absolute", "bg-white", "p-2")}>
          {routes.map((route) => (
            <li>
              <Link href={route.url}>
                <a
                  className={classnames(
                    route.url === currentPath ? "font-bold" : ""
                  )}
                >
                  {route.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

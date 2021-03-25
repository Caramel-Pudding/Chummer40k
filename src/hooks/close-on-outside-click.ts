import {
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";

export const useCloseOnOutsideClick = (
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  isOpen: boolean,
  component: RefObject<HTMLDivElement>
): void => {
  const handleClosure = useCallback(
    (event: MouseEvent) =>
      !component?.current?.contains(event.target as Element) &&
      isOpen &&
      setIsOpen(false),
    [setIsOpen, isOpen, component]
  );

  useEffect(() => {
    window.addEventListener("click", handleClosure);

    return () => {
      window.removeEventListener("click", handleClosure);
    };
  }, [handleClosure, component]);
};

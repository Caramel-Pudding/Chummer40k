import React, { FC, memo } from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = memo(({ message }) => {
  return <div>{message}</div>;
});

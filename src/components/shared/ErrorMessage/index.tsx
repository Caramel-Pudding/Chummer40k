import React from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = React.memo(
  ({ message }) => {
    return <div>{message}</div>;
  }
);

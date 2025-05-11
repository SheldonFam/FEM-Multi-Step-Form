import React from "react";
import { FORM_STYLES } from "@/styles/formStyles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      className={`${FORM_STYLES.button.base} ${
        disabled || isLoading ? FORM_STYLES.button.disabled : ""
      } ${className}`}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p>Submitting...</p>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

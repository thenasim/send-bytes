import clsx from "clsx";
import React from "react";

interface Props {
  label: string;
  customClass?: string;
  fullWidth?: boolean;
  primary?: boolean;
  outline?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<Props> = ({
  label,
  type,
  primary,
  outline,
  fullWidth,
  customClass,
  children,
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 font-medium transition-colors rounded-md",
        fullWidth && "w-full",
        primary &&
          "focus:ring focus:ring-emerald-300 text-emerald-50 hover:text-white focus:outline-none hover:bg-emerald-500 bg-emerald-600",
        outline &&
          "border border-gray-200 rounded hover:bg-gray-50 focus:ring focus:ring-gray-100 focus:outline-none",
        customClass
      )}
      type={type || "button"}
    >
      {children} {label}
    </button>
  );
};

export default Button;

import React from "react";
import { BiError } from "react-icons/bi";
import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import type { FieldError } from "react-hook-form";

type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputType {
  name: string;
  label: string;
  error?: FieldError;
  type?: string;
  className?: string;
}

const InputField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <label className="block">
        <div className="flex flex-wrap items-center justify-between">
          <p className="mb-1 text-sm font-medium text-gray-600">
            {props.label}
          </p>
          {props.error && (
            <p className="flex items-center text-xs font-medium text-red-500">
              <BiError className="mr-1" /> This field can't be empty
            </p>
          )}
        </div>
        <input
          className="w-full px-2 py-1 text-gray-700 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-emerald-300"
          ref={ref}
          {...props}
        />
      </label>
    </>
  );
});

export default InputField;

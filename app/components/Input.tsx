import React from "react";
import { Icons } from "./Icons";
import { Tiny } from "./Text";

const InputTextStyle = {
  fontFamily: "'Switzer'",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0.02em",
} satisfies React.CSSProperties;

export const Input = React.forwardRef(function Input(
  props: {
    icon?: React.FC<React.SVGAttributes<SVGElement>>;
    hasError?: boolean;
    errorMessage?: string;
    inputProps: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
  },
  ref: React.Ref<HTMLInputElement>
) {
  const hasErrorClassName = props.hasError ? "border-error text-error" : "";

  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor={props.inputProps.id} className="flex items-center">
        <Tiny.Regular className="uppercase">
          {props.inputProps.name?.split(/\.?(?=[A-Z])/).join(" ")}
        </Tiny.Regular>
        {props.inputProps.required && (
          <div className="h-4 w-4 flex items-center justify-center">
            <Icons.RequiredAsterisk />
          </div>
        )}
      </label>
      <div className="w-full flex gap-1 flex-col">
        <div className="relative w-full ">
          <input
            {...props.inputProps}
            ref={ref}
            style={InputTextStyle}
            className={`w-full border-b border-almost-black py-2 pl-6 bg-almost-white ${hasErrorClassName}`}
          />
          {props.icon && (
            <div className="absolute left-0 top-0 bottom-0 flex items-center">
              {<props.icon fill={props.hasError ? "#FF4141" : "#201E1C"} />}
            </div>
          )}
        </div>

        {props.hasError && (
          <Tiny.Light className="text-error">{props.errorMessage}</Tiny.Light>
        )}
      </div>
    </div>
  );
});

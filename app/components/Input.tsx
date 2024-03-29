"use client";
import React from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { Tiny } from "./Text";
import { Icons } from "./Icons";

const InputTextStyle = {
  fontFamily: "'Switzer'",
  fontStyle: "normal",
  fontWeight: "300",
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0.02em",
} satisfies React.CSSProperties;

const NotificationDot = (props: HTMLMotionProps<"div">) => (
  <motion.div
    {...props}
    className={`rounded-2xl bg-almost-black w-[50px] h-6 flex flex-col justify-center items-center px-2 ${props.className}`}
  ></motion.div>
);

export function Input<T extends FieldValues>(
  props: UseControllerProps<T> & {
    icon: React.FC<React.SVGAttributes<SVGElement>>;
    placeholder?: string;
    type?: string;
  }
) {
  const { field, fieldState } = useController(props);
  const hasErrorClassName = fieldState.invalid ? "border-error text-error" : "";

  const maxLength = props.rules?.maxLength
    ? parseInt(props.rules.maxLength.toString())
    : null;

  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor={props.name} className="flex items-center">
        <Tiny.Regular className="uppercase">
          {props.name?.split(/\.?(?=[A-Z])/).join(" ")}
        </Tiny.Regular>
        {props.rules?.required && (
          <div className="h-4 w-4 flex items-center justify-center">
            <Icons.RequiredAsterisk />
          </div>
        )}
      </label>
      <div className="w-full flex gap-1 flex-col">
        <div className="relative w-full group">
          <input
            {...field}
            type={props.type}
            placeholder={props.placeholder}
            style={InputTextStyle}
            className={`w-full border-b border-almost-black py-2 pl-6 bg-almost-white focus-visible:outline-none focus-visible:border-fresh-orange focus-visible:ring-0 ${hasErrorClassName}`}
          />
          <div
            className={`min-w-4 absolute left-0 top-0 bottom-0 flex items-center justify-center`}
          >
            <props.icon fill={fieldState.invalid ? "#FF4141" : "#201E1C"} />
          </div>
          {maxLength && (
            <div
              className={`min-w-4 absolute right-0 top-0 bottom-0 flex items-center justify-center group-focus-within:opacity-100 opacity-0 transition-opacity duration-200`}
            >
              <NotificationDot>
                <Tiny.Tiny className="text-white">
                  {field.value.length}/{maxLength}
                </Tiny.Tiny>
              </NotificationDot>
            </div>
          )}
          {maxLength && (
            <div
              className={`bg-warm-mid-gray right-0 h-[1px] absolute bottom-0 group-focus-within:opacity-100 opacity-0 transition-opacity duration-200`}
              style={{
                width: `${100 - (field.value.length / maxLength) * 100}%`,
              }}
            ></div>
          )}
        </div>

        <AnimatePresence>
          {fieldState.error !== undefined && (
            <Tiny.Light
              className="text-error"
              initial={{ height: "1px", opacity: 0 }}
              animate={{ height: "16px", opacity: 1 }}
              exit={{ height: "1px", opacity: 0 }}
            >
              {fieldState.error?.message}
            </Tiny.Light>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

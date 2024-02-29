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

export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & { icon?: React.ReactNode }
) => (
  <div className="flex flex-col items-start w-full">
    <label htmlFor={props.id} className="flex">
      <Tiny.Regular className="uppercase">{props.name}</Tiny.Regular>
      {props.required && <Icons.RequiredAsterisk />}
    </label>
    <div className="relative w-full">
      <input
        {...props}
        style={InputTextStyle}
        className="w-full border-b border-almost-black py-2 pl-6 bg-almost-white"
      />
      {props.icon && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          {props.icon}
        </div>
      )}
    </div>
  </div>
);

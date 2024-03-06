import { motion, HTMLMotionProps } from "framer-motion";

export const Dialog = (props: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      {...props}
      className={`flex flex-col w-full rounded-2xl bg-almost-white items-start justify-start overflow-hidden gap-4 relative ${props.className}`}
    ></motion.div>
  );
};

export const DialogActions = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <div className="flex flex-col items-end px-4 gap-2 w-full" {...props}></div>
  );
};

export const DialogBody = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <div className="w-full flex flex-col justify-center px-4 gap-2 items-start">
      <div
        className="w-full border border-solid border-warm-mid-gray rounded-lg p-4 flex flex-col items-center gap-4"
        {...props}
      ></div>
    </div>
  );
};

export const DialogHeader = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <div
      {...props}
      className={`bg-warm-light-gray w-full px-4 py-8 gap-2 flex flex-col ${props.className}`}
    ></div>
  );
};

import { motion, HTMLMotionProps } from "framer-motion";

export const Button = (props: HTMLMotionProps<"button">) => (
  <motion.button
    {...props}
    className={`flex justify-center items-center py-2 px-4 gap-1 rounded-lg border border-almost-black h-10 ${props.className}`}
  ></motion.button>
);

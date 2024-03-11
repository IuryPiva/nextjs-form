import { motion } from "framer-motion";
import { UseFormReset } from "react-hook-form";
import dynamic from "next/dynamic";

import CloseIcon from "@/public/close-icon.svg";

import { Dialog, DialogHeader } from "./Dialog";
import { Body, Headers } from "./Text";
const LottiePlayer = dynamic(() => import("./LottiePlayer"), { ssr: false });

export const SubmitSuccessfulDialog = ({
  reset,
}: {
  reset: UseFormReset<any>;
}) => {
  return (
    <motion.div
      initial={{ background: "rgba(0, 0, 0, 0)" }}
      animate={{ background: "rgba(0, 0, 0, 0.5)" }}
      exit={{ background: "rgba(0, 0, 0, 0)" }}
      className="absolute h-full flex flex-col justify-end z-20"
    >
      <Dialog
        className="min-h-[304px]"
        initial={{ y: 304 }}
        exit={{ y: 304, transition: { duration: 0.3, ease: "easeInOut" } }}
        animate={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
      >
        <motion.div
          className="flex flex-col items-center justify-center absolute w-8 h-8 right-6 top-6 z-10 hover:bg-gray-shade rounded-full cursor-pointer transition-colors duration-400"
          whileHover={{
            rotate: -90,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          onClick={() => reset()}
        >
          <CloseIcon />
        </motion.div>
        <DialogHeader className="px-8 py-4">
          <div className="flex items-center justify-center">
            <LottiePlayer />
          </div>
        </DialogHeader>
        <div className="w-full flex flex-col px-8 gap-4 items-center pb-8">
          <Headers.Secondary>Thank you!</Headers.Secondary>
          <Body.Regular className="text-center">
            Your form has been submitted successfully.
          </Body.Regular>
        </div>
      </Dialog>
    </motion.div>
  );
};

import { motion, Variants, Transition } from "framer-motion";
import { Button } from "../components/Button";
import { Icons } from "../components/Icons";
import { Dialog } from "../components/Dialog";
import { Body } from "../components/Text";

export const SubmitButton = () => {
  const transition: Transition = {
    duration: 0.45,
    type: "easeOut",
  };

  const iconMotion: Variants = {
    rest: {
      rotateZ: 0,
      fill: "#201E1C",
      transition,
    },
    hover: {
      rotateZ: 45,
      fill: "#ffffff",
      transition,
    },
  };

  const textMotion: Variants = {
    rest: {
      color: "#201E1C",
      transition,
    },
    hover: {
      color: "#ffffff",
      transition,
    },
  };

  const bgMotion: Variants = {
    rest: {
      top: 40,
      transition,
    },
    hover: {
      top: -21,
      transition,
    },
  };

  const buttonMotion: Variants = {
    rest: {
      borderColor: "#201E1C",
      transition,
    },
    hover: {
      borderColor: "#FA7921",
      transition,
    },
  };

  return (
    <motion.div initial="rest" whileHover="hover" animate="rest">
      <Button variants={buttonMotion} className="relative overflow-hidden">
        <motion.div
          variants={bgMotion}
          className="w-[500px] z-0 h-[500px] rounded-full absolute bg-fresh-orange"
        ></motion.div>
        <Body.Regular className="z-10" variants={textMotion}>
          Submit my form
        </Body.Regular>
        <motion.div variants={iconMotion}>
          <Icons.AllOpen fill="inherit" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

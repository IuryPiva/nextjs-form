"use client";
import StarFilled from "@/public/star-filled.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AnimatePresence, motion } from "framer-motion";

import CloseIcon from "@/public/close-icon.svg";

import { Icons } from "./components/Icons";
import { Input } from "./components/Input";
import { Body, Headers } from "./components/Text";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogHeader,
} from "./components/Dialog";
import { useState } from "react";
import { SubmitButton } from "./components/SubmitButton";

type Inputs = {
  fullName: string;
  dateOfBirth?: string;
  nickname: string;
  email: string;
  portfolioLink: string;
};

export default function Home() {
  const { control, handleSubmit, formState, setValue, reset } = useForm<Inputs>(
    {
      defaultValues: {
        fullName: "",
        dateOfBirth: "",
        nickname: "",
        email: "",
        portfolioLink: "",
      },
      mode: "onChange",
    }
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleFlip();
    console.log({ data });
  };

  const debugFill = () => {
    setValue("fullName", "John Doe");
    setValue("dateOfBirth", "2000-01-01");
    setValue("nickname", "johndoe");
    setValue("email", "john@doe.com");
    setValue("portfolioLink", "https://johndoe.com");
  };

  // trigger debugFill on cmd + 1
  window.addEventListener("keydown", (e) => {
    if (e.key === "1" && e.metaKey) {
      debugFill();
    }
  });

  if (formState.isSubmitSuccessful || true) {
    return (
      <Dialog className="min-h-[168px]">
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
        <DialogHeader onClick={() => reset()}>
          <div className="flex items-center justify-center">
            <Player
              autoplay
              loop
              src="https://lottie.host/bd72175a-8a58-414d-8e04-6aad6201b6cc/XsV2L4eBXs.json"
              style={{ height: "80px", width: "80px" }}
            >
              <Controls visible={false} />
            </Player>
          </div>
        </DialogHeader>
        <div className="w-full flex flex-col px-8 gap-4 items-center pb-8">
          <Headers.Secondary>Thank you!</Headers.Secondary>
          <Body.Regular>
            Your form has been submitted successfully.
          </Body.Regular>
        </div>
      </Dialog>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AnimatePresence>
        <Dialog className="min-h-[768px]">
          <DialogHeader>
            <div className="gap-2 flex items-center">
              <Headers.Primary>Welcome!</Headers.Primary>
              <StarFilled width={20} height={20} />
            </div>
            <div>
              <Body.Regular>
                Please, complete the following example form.
              </Body.Regular>
            </div>
          </DialogHeader>
          <DialogBody>
            <Body.Bold className="w-full">About you</Body.Bold>

            <Input
              icon={Icons.Profile}
              control={control}
              rules={{
                required: "This field is required.",
              }}
              name="fullName"
            />
            <Input
              icon={Icons.CalendarDate}
              control={control}
              name="dateOfBirth"
              type="date"
            />
            <Input
              icon={Icons.Send}
              control={control}
              name="nickname"
              rules={{
                required: "This field is required.",
                validate: (value) => {
                  if (!value) return "This field is required.";
                  if (value.includes(" ")) return "No spaces allowed.";
                },
              }}
              placeholder="No spaces"
            />

            <Body.Bold className="w-full">Contact Information</Body.Bold>

            <Input
              icon={Icons.Email}
              control={control}
              name="email"
              rules={{
                required: "This field is required.",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email address.",
                },
              }}
              placeholder="email@domain.com"
              type="email"
            />
            <Input
              icon={Icons.Link}
              control={control}
              name="portfolioLink"
              rules={{
                required: "This field is required.",
                // https://stackoverflow.com/a/58172035
                pattern: {
                  value:
                    /[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?/,
                  message: "Invalid URL.",
                },
              }}
              placeholder="https://"
              type="url"
            />
          </DialogBody>
          <DialogActions>
            <SubmitButton />
          </DialogActions>
        </Dialog>
      </AnimatePresence>
    </form>
  );
}

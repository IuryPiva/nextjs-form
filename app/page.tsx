"use client";
import StarFilled from "@/public/star-filled.svg";
import { AnimatePresence } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogHeader,
} from "./components/Dialog";
import { Icons } from "./components/Icons";
import { Input } from "./components/Input";
import { SubmitButton } from "./components/SubmitButton";
import { Body, Headers } from "./components/Text";
import { isNicknameAvailable, save } from "./actions";
import { SubmitSuccessfulDialog } from "./components/SubmitSuccessfulDialog";
import { useEffect } from "react";

export type Inputs = {
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
      mode: "all",
    }
  );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data });
    save(data);
  };

  const debugFill = () => {
    setValue("fullName", "John Doe");
    setValue("dateOfBirth", "2000-01-01");
    setValue("nickname", "johndoe");
    setValue("email", "john@doe.com");
    setValue("portfolioLink", "https://johndoe.com");
  };

  useEffect(() => {
    // trigger debugFill on cmd + 1
    window.addEventListener("keydown", (e) => {
      if (e.key === "1" && e.metaKey) {
        debugFill();
      }
    });
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              validate: async (value) => {
                if (!value) return "This field is required.";
                if (value.includes(" ")) return "No spaces allowed.";

                const isAvailable = await isNicknameAvailable(value);
                if (!isAvailable) return "This nickname is already taken.";
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

        <AnimatePresence>
          {formState.isSubmitSuccessful && (
            <SubmitSuccessfulDialog reset={reset} />
          )}
        </AnimatePresence>
      </Dialog>
    </form>
  );
}

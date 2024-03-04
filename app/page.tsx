"use client";
import StarFilled from "@/public/star-filled.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./components/Button";
import { Icons } from "./components/Icons";
import { Input } from "./components/Input";
import { Body, Headers } from "./components/Text";

type Inputs = {
  fullName: string;
  dateOfBirth?: string;
  nickname: string;
  email: string;
  portfolioLink: string;
};

export default function Home() {
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      nickname: "",
      email: "",
      portfolioLink: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log({ data });

  return (
    <form
      className="flex flex-col w-full rounded-lg bg-almost-white items-start justify-start overflow-hidden gap-4 min-h-[768px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-warm-light-gray w-full px-4 py-8 gap-2 flex flex-col">
        <div className="gap-2 flex items-center">
          <Headers.Primary>Welcome!</Headers.Primary>
          <StarFilled width={20} height={20} />
        </div>
        <div>
          <Body.Regular>
            Please, complete the following example form.
          </Body.Regular>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center px-4 gap-2 items-start">
        <div className="w-full border border-solid border-warm-mid-gray rounded-lg p-4 flex flex-col items-center gap-4">
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
            rules={{ required: "This field is required." }}
          />
          <Input
            icon={Icons.Link}
            control={control}
            name="portfolioLink"
            rules={{ required: "This field is required." }}
            placeholder="https://"
          />
        </div>
      </div>

      <div className="flex flex-col items-end px-4 gap-2 w-full">
        <Button>
          Submit my form <Icons.AllOpen />
        </Button>
      </div>
    </form>
  );
}

"use client";
import Image from "next/image";
import { Body, Headers } from "./components/Text";
import { Input } from "./components/Input";
import { Icons } from "./components/Icons";
import { Button } from "./components/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import StarFilled from "@/public/star-filled.svg";

type Inputs = {
  fullName: string;
  dateOfBirth?: string;
  nickname: string;
  email: string;
  portfolioLink: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log({ data });

  const Header = () => (
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
  );

  const FieldSetContainer = () => (
    <div className="w-full flex flex-col justify-center px-4 gap-2 items-start">
      <div className="w-full border border-solid border-warm-mid-gray rounded-lg p-4 flex flex-col items-center gap-4">
        <Body.Bold className="w-full">About you</Body.Bold>

        <Input
          icon={Icons.Profile}
          inputProps={{
            ...register("fullName", { required: "This field is required." }),
            required: true,
          }}
          hasError={errors.fullName !== undefined}
          errorMessage={errors.fullName?.message}
        />
        {JSON.stringify(errors.fullName)}
        <Input
          icon={Icons.CalendarDate}
          inputProps={{ ...register("dateOfBirth"), type: "date" }}
        />
        <Input
          icon={Icons.Send}
          inputProps={{
            ...register("nickname", { required: "This field is required." }),
            required: true,
            placeholder: "No spaces",
          }}
        />

        <Body.Bold className="w-full">Contact Information</Body.Bold>

        <Input
          icon={Icons.Email}
          inputProps={{
            ...register("email", { required: "This field is required." }),
            required: true,
            placeholder: "email@domain.com",
          }}
        />
        <Input
          icon={Icons.Link}
          inputProps={{
            ...register("portfolioLink", {
              required: "This field is required.",
            }),
            required: true,
            placeholder: "https://",
          }}
        />
      </div>
    </div>
  );

  const ActionsContainer = () => (
    <div className="flex flex-col items-end px-4 gap-2 w-full">
      <Button type="submit">
        Submit my form <Icons.AllOpen />
      </Button>
    </div>
  );

  return (
    <form
      className="flex flex-col w-full rounded-lg bg-almost-white items-start justify-start overflow-hidden gap-4 min-h-[768px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header />
      <FieldSetContainer />
      <ActionsContainer />
    </form>
  );
}

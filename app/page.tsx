"use client";
import Image from "next/image";
import { Body, Headers } from "./components/Text";
import { Input } from "./components/Input";
import { Icons } from "./components/Icons";
import { Button } from "./components/Button";
import { useForm, SubmitHandler } from "react-hook-form";

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
      <div className="gap-2 flex">
        <Headers.Primary>Welcome!</Headers.Primary>
        <Image
          src="/star-filled.svg"
          alt="Star filled"
          width={20}
          height={20}
        />
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
          icon={<Icons.Profile />}
          {...register("fullName", { required: true })}
          error
        />
        <Input
          type="date"
          icon={<Icons.CalendarDate />}
          {...register("dateOfBirth")}
        />
        <Input
          icon={<Icons.Send />}
          placeholder="No spaces"
          {...register("nickname", { required: true })}
        />

        <Body.Bold className="w-full">Contact Information</Body.Bold>

        <Input
          icon={<Icons.Email />}
          placeholder="email@domain.com"
          {...register("email", { required: true })}
        />
        <Input
          icon={<Icons.Link />}
          placeholder="https://"
          {...register("portfolioLink", { required: true })}
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

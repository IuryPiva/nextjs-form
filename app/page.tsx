import Image from "next/image";
import { Body, Headers } from "./components/Text";
import { Input } from "./components/Input";
import { Icons } from "./components/Icons";

const Header = () => (
  <div className="bg-warm-light-gray w-full px-4 py-8 gap-2 flex flex-col">
    <div className="gap-2 flex">
      <Headers.Primary>Welcome!</Headers.Primary>
      <Image src="/star-filled.svg" alt="Star filled" width={20} height={20} />
    </div>
    <div>
      <Body.Regular>Please, complete the following example form.</Body.Regular>
    </div>
  </div>
);

const FieldSetContainer = () => (
  <div className="w-full flex flex-col justify-center px-4 gap-2 items-start">
    <div className="w-full border border-solid border-warm-mid-gray rounded-lg p-4 flex flex-col items-center gap-4">
      <Body.Bold className="w-full">About you</Body.Bold>

      <Input name="Full name" required icon={<Icons.Profile />} />
      <Input name="Date of birth" type="date" icon={<Icons.CalendarDate />} />
      <Input
        name="Nickname"
        required
        icon={<Icons.Send />}
        placeholder="No spaces"
      />

      <Body.Bold className="w-full">Contact Information</Body.Bold>

      <Input
        name="Email"
        required
        icon={<Icons.Email />}
        placeholder="email@domain.com"
      />
      <Input
        name="Portfolio Link"
        required
        icon={<Icons.Link />}
        placeholder="https://"
      />
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col w-full rounded-lg bg-almost-white items-center justify-start overflow-hidden gap-4 min-h-[768px]">
      <Header />
      <FieldSetContainer />
    </div>
  );
}

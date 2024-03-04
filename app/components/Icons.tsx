import Image from "next/image";

const makeIcon = (name: string, w: number, h?: number) => (
  <div className="w-4 h-4 flex justify-center items-center">
    <Image src={`/${name}.svg`} alt={name} width={w} height={h ?? w} />
  </div>
);

export const Icons = {
  AllOpen: () => makeIcon("all-open", 8),
  Email: () => makeIcon("email", 16, 12),
  Link: () => makeIcon("link", 16, 8),
  CalendarDate: () => makeIcon("calendar-date", 16, 12),
  Profile: () => makeIcon("profile", 11.88, 14.21),
  RequiredAsterisk: () => makeIcon("required-asterisk", 10, 10),
  Send: () => makeIcon("send", 17.21, 14.68),
};

import AllOpen from "@/public/all-open.svg";
import CalendarDate from "@/public/calendar-date.svg";
import Email from "@/public/email.svg";
import Link from "@/public/link.svg";
import Profile from "@/public/profile.svg";
import RequiredAsterisk from "@/public/required-asterisk.svg";
import Send from "@/public/send.svg";

export const Icons: {
  [key: string]: React.FC<React.SVGAttributes<SVGElement>>;
} = {
  AllOpen,
  Email,
  Link,
  CalendarDate,
  Profile,
  RequiredAsterisk,
  Send,
};

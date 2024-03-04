import dynamic from "next/dynamic";
import { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {
  ext?: "svg";
  icon: string;
}

export const Icon: FC<Props> = ({ icon, ...props }) => {
  const Icon = dynamic(() => import(`@/public/${icon}.svg`));
  return <Icon {...props} />;
};

export const Icons = {
  AllOpen: (props: SVGAttributes<SVGElement>) =>
    Icon({ icon: "all-open", ...props }),
  Email: (props: SVGAttributes<SVGElement>) =>
    Icon({ icon: "email", ...props }),
  Link: (props: SVGAttributes<SVGElement>) => Icon({ icon: "link", ...props }),
  CalendarDate: (props: SVGAttributes<SVGElement>) =>
    Icon({ icon: "calendar-date", ...props }),
  Profile: (props: SVGAttributes<SVGElement>) =>
    Icon({ icon: "profile", ...props }),
  RequiredAsterisk: (props: SVGAttributes<SVGElement>) =>
    Icon({ icon: "required-asterisk", ...props }),
  Send: (props: SVGAttributes<SVGElement>) => Icon({ icon: "send", ...props }),
};

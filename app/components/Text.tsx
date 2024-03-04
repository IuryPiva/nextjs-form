import { motion, HTMLMotionProps } from "framer-motion";

const makeStyledText = (style: React.CSSProperties) =>
  function StyledText(props: HTMLMotionProps<"span">) {
    return (
      <motion.span {...props} style={{ ...style, ...props.style }}>
        {props.children}
      </motion.span>
    );
  };

const HeadersStyle = {
  primary: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "26px",
    lineHeight: "123%",
  },

  secondary: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "111%",
    letterSpacing: "0.02em",
  },

  tertiary: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "132%",
  },

  display: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "48px",
    lineHeight: "117%",
    letterSpacing: "-0.02em",
  },
} satisfies Record<string, React.CSSProperties>;

export const Headers = {
  Primary: makeStyledText(HeadersStyle.primary),
  Secondary: makeStyledText(HeadersStyle.secondary),
  Tertiary: makeStyledText(HeadersStyle.tertiary),
  Display: makeStyledText(HeadersStyle.display),
};

const BodyStyles = {
  light: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "150%",
    /* identical to box height, or 24px */
    letterSpacing: "0.02em",
  },
  regular: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "150%",
    /* identical to box height, or 24px */
    letterSpacing: "0.02em",
    color: "rgba(32, 30, 28, 0.8)",
  },
  bold: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    /* identical to box height, or 24px */
    letterSpacing: "0.02em",
    color: "rgba(32, 30, 28, 0.8)",
  },
  big: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "176%",
    /* identical to box height, or 32px */
    letterSpacing: "0.04em",
  },
  bigMediumShort: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "88%",
    /* identical to box height, or 16px */
    letterSpacing: "0.01em",
  },
  bigBold: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "176%",
    /* identical to box height, or 32px */
    letterSpacing: "0.04em",
  },
} satisfies Record<string, React.CSSProperties>;

export const Body = {
  Light: makeStyledText(BodyStyles.light),
  Regular: makeStyledText(BodyStyles.regular),
  Bold: makeStyledText(BodyStyles.bold),
  Big: makeStyledText(BodyStyles.big),
  BigMediumShort: makeStyledText(BodyStyles.bigMediumShort),
  BigBold: makeStyledText(BodyStyles.bigBold),
};

const TinyStyles = {
  regular: {
    fontFamily: "'Switzer'",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.03em",
    color: "rgba(32, 30, 28, 0.8)",
  },
  light: {
    fontFamily: "Switzer",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.02em",
  },
} satisfies Record<string, React.CSSProperties>;

export const Tiny = {
  Regular: makeStyledText(TinyStyles.regular),
  Light: makeStyledText(TinyStyles.light),
};

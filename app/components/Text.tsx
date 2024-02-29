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
  Primary: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...HeadersStyle.primary }}>
      {props.children}
    </span>
  ),
  Secondary: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...HeadersStyle.secondary }}>
      {props.children}
    </span>
  ),
  Tertiary: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...HeadersStyle.tertiary }}>
      {props.children}
    </span>
  ),
  Display: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...HeadersStyle.display }}>
      {props.children}
    </span>
  ),
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
  Light: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...BodyStyles.light }}>
      {props.children}
    </span>
  ),
  Regular: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...BodyStyles.regular }}>
      {props.children}
    </span>
  ),
  Bold: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...BodyStyles.bold }}>
      {props.children}
    </span>
  ),
  Big: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...BodyStyles.big }}>
      {props.children}
    </span>
  ),
  BigMediumShort: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...BodyStyles.bigMediumShort }}>
      {props.children}
    </span>
  ),
  BigBold: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...BodyStyles.bigBold }}>
      {props.children}
    </span>
  ),
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
} satisfies Record<string, React.CSSProperties>;

export const Tiny = {
  Regular: (
    props: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >
  ) => (
    <span {...props} style={{ ...props.style, ...TinyStyles.regular }}>
      {props.children}
    </span>
  ),
};

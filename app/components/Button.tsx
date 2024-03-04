export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => (
  <button
    {...props}
    className="flex justify-center items-center py-2 px-4 gap-1 rounded-lg border border-almost-black h-10"
  ></button>
);

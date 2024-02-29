export const Dialog = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {header ? (
        <div>
          <h1 className="p-8 font-bold">{header}</h1>
        </div>
      ) : null}
      <div className="p-8 bg-white rounded-lg">{children}</div>
    </div>
  );
};

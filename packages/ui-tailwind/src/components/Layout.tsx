export type LayoutProps = {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  justify?: "start" | "center" | "end";
  isRow?: boolean;
};

export const Layout = ({
  children,
  align = "left",
  justify = "start",
  isRow = false,
}: LayoutProps) => {
  const alignment = `items-${align} justify-${justify}`;
  const direction = isRow ? "flex-row" : "flex-col";

  const styles = `m-10 flex ${direction} ${alignment} `;

  return <div className={styles}>{children}</div>;
};

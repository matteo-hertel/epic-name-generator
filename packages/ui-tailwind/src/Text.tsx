import type { TextSize, Color } from "./types";

export type TextProps = {
  children: string;
  color?: Color;
  size?: TextSize;
  align?: "left" | "center" | "right";
  isBold?: boolean;
};

export const Text = ({
  children,
  isBold = false,
  size = "base",
  align = "left",
}: TextProps) => {
  const fontSize = `text-${size}`;
  const textAlign = `text-${align}`;
  const fontWeight = isBold ? "font-bold" : "font-normal";

  const styles = `${fontSize} ${textAlign} ${fontWeight}`;

  return <p className={styles}>{children}</p>;
};

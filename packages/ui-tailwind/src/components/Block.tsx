export type BlockProps = {
  children?: React.ReactNode;
  margin?: number;
  padding?: number;
};

export const Block = ({ children, margin = 0, padding = 0 }: BlockProps) => {
  const styles = `m-${margin} p-${padding} `;

  return <div className={styles}>{children}</div>;
};

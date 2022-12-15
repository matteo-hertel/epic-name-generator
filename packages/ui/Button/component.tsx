import * as React from "react";

import classNames from "classnames";

import styles from "./styles.module.css";

export const Button = ({ fancy }: { fancy?: boolean }) => {
  const className = classNames({ [styles.fancyButton]: fancy });
  return <button className={className}>Boop</button>;
};

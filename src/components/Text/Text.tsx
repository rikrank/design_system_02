import React, { FC } from "react";
import styles from "./Text.module.scss";

type Props = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

const Text: FC<Props> = ({ label, onClick, disabled }) => {
  return (
    <p
      className={`${styles.blue} ${disabled && styles.disabled}`}
      onClick={onClick}
    >
      {label}
    </p>
  );
};

export default Text;

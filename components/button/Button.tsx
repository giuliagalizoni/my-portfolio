import { ReactNode, useState } from 'react';
import styles from './Button.module.css';

// const [primary, setPrimary] = useState(false);

const Button = ({
  children,
  btnPrimary,
  onClick,
}: {
  children: ReactNode;
  btnPrimary?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${styles.btn} ${
        btnPrimary ? styles.primary : styles.default
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

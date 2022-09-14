import { ReactNode, useState } from 'react';
import styles from './Button.module.css';

// const [primary, setPrimary] = useState(false);

const Button = ({
  children,
  btnPrimary,
}: {
  children: ReactNode;
  btnPrimary?: boolean;
}) => {
  return (
    <button
      className={`${styles.btn} ${
        btnPrimary ? styles.primary : styles.default
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

import styles from './Hamburger.module.css';

const Hamburger = () => {
  return (
    <button>
      <div className={styles.hamburger}>
        <div className={styles.burger} />
        <div className={styles.burger} />
        <div className={styles.burger} />
      </div>
    </button>
  );
};

export default Hamburger;

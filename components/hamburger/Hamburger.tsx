import styles from './Hamburger.module.css';
import Button from '../button/Button';

const Hamburger = ({
  setHamburgerIsOpen,
}: {
  setHamburgerIsOpen: (arg: boolean) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.hamburgerTop}>
        <span className={styles.btn}>
          <Button btnPrimary={true} onClick={() => setHamburgerIsOpen(false)}>
            <img src='/icons/x.svg' />
          </Button>
        </span>

        <ul className={styles.navList}>
          <li>
            <a href='https://github.com/giuliagalizoni' target='_blank'>
              <span className={styles.linkText}>Github</span>
              <img src='/icons/external-link.svg' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/giulia-galizoni-caversan/'
              target='_blank'
            >
              <span className={styles.linkText}>LinkedIn</span>
              <img src='/icons/external-link.svg' />
            </a>
          </li>
          <li>
            <a target='_blank' href='/'>
              <span className={styles.linkText}>Resume</span>
              <img src='/icons/external-link.svg' />
            </a>
          </li>
        </ul>
      </div>

      <span className={styles.contactBtn}>
        <Button
          btnPrimary={false}
          onClick={() => {
            window.location.href = 'mailto:giuliagalizoni@gmail.com';
          }}
        >
          Contact
        </Button>
      </span>
    </div>
  );
};

export default Hamburger;

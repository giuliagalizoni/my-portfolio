import styles from './Hamburger.module.css';
import Button from '../button/Button';
import Image from 'next/image';

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
            <Image src='/icons/x.svg' width={24} height={24} alt='' />
          </Button>
        </span>

        <ul className={styles.navList}>
          <li>
            <a
              href='https://github.com/giuliagalizoni'
              target='_blank'
              rel='noreferrer'
            >
              <span className={styles.linkText}>Github</span>
              <Image
                src='/icons/external-link.svg'
                width={20}
                height={20}
                alt=''
              />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/giulia-galizoni-caversan/'
              target='_blank'
              rel='noreferrer'
            >
              <span className={styles.linkText}>LinkedIn</span>
              <Image
                src='/icons/external-link.svg'
                width={20}
                height={20}
                alt=''
              />
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/13H3Dwzr5bQzZxvbmOHPdai53axt29-3N/view?usp=sharing'
              rel='noreferrer'
            >
              <span className={styles.linkText}>Resume</span>
              <Image
                src='/icons/external-link.svg'
                width={20}
                height={20}
                alt=''
              />
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

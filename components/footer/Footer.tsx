import smileIcon from '../../public/icons/smile.svg';
import styles from './Footer.module.css';

import Menu from '../menu/Menu';
import Wrapper from '../Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.footerContainer}>
          <div className={styles.end}>
            <img src={smileIcon.src} alt='Smile Icon' />
            <p>That’s all for now</p>
          </div>
        </div>
      </Wrapper>
      <div className={styles.footerBottom}>
        <Wrapper>
          <nav className={styles.nav}>
            <Menu btnPrimary={true} />
          </nav>

          <p className={styles.subtitle}>
            Developed in Berlin with Next.js © 2022 Giulia Galizoni
          </p>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;

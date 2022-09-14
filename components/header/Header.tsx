import Link from 'next/link';
import Wrapper from '../Wrapper';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <Wrapper>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src='./' />
            <Link href='/'>
              <a className={styles.title}>Giulia Galizoni</a>
            </Link>
          </div>

          <ul className={styles.navList}>
            <li>
              <a href='https://github.com/giuliagalizoni' target='_blank'>
                Github
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/giulia-galizoni-caversan/'
                target='_blank'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target='_blank'>Resume</a>
            </li>
            <li>
              <button className={styles.btn}>Contato</button>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;

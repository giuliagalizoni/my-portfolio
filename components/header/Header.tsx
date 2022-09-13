import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <img src='./' />
          <Link href='/'>Giulia Galizoni</Link>
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
            <button>Contato</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import Link from 'next/link';

import Wrapper from '../Wrapper';
import Button from '../button/Button';
import Menu from '../menu/Menu';

import styles from './Header.module.css';

import photo from '../../public/images/Photo.png';
import Hamburger from '../hamburger/Hamburger';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.nav}>
          <Link href='/'>
            <div className={styles.logo}>
              <img src={photo.src} alt="Giulia's picture" />
              <a className={styles.title}>Giulia Galizoni</a>
            </div>
          </Link>
          {/* usar a flag do menu hambuger pra definir se column é true ou false */}
          <Menu column={false} />

          <div className={styles.hamburger}>
            <button>Hamburger</button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;

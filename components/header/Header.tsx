import Link from 'next/link';

import Wrapper from '../Wrapper';
import Button from '../button/Button';
import Menu from '../menu/Menu';

import styles from './Header.module.css';

import photo from '../../public/images/Photo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={photo.src} alt="Giulia's picture" />
            <Link href='/'>
              <a className={styles.title}>Giulia Galizoni</a>
            </Link>
          </div>
          <Menu />
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;

import { useState } from 'react';

import Link from 'next/link';

import Wrapper from '../Wrapper';
import Button from '../button/Button';
import Menu from '../menu/Menu';

import styles from './Header.module.css';

import photo from '../../public/images/Photo.png';
import Hamburger from '../hamburger/Hamburger';

const Header = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const toggleHamburger = () => setHamburgerIsOpen(!hamburgerIsOpen);

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

          <div className={styles.menuContainer}>
            <Menu column={false} />
            <Button
              onClick={() => {
                window.location.href = 'mailto:giuliagalizoni@gmail.com';
              }}
            >
              Contact
            </Button>
          </div>
          <div className={styles.hamburger}>
            <Button btnPrimary={true} onClick={toggleHamburger}>
              <img src='/icons/icon-menu.svg' />
            </Button>
            <div
              className={hamburgerIsOpen ? `${styles.show} ` : styles.translate}
            >
              {/* <Menu column={true} /> */}
              <Hamburger setHamburgerIsOpen={setHamburgerIsOpen} />
            </div>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Header;

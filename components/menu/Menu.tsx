import styles from './Menu.module.css';
import Button from '../button/Button';

const Menu = ({ btnPrimary }: { btnPrimary?: boolean }) => {
  return (
    <ul className={styles.navList}>
      <div>
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
          <a target='_blank' href='/'>
            Resume
          </a>
        </li>
      </div>
      <li>
        <Button btnPrimary={btnPrimary}>Contact</Button>
      </li>
    </ul>
  );
};

export default Menu;

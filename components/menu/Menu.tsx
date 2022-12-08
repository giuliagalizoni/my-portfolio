import styles from './Menu.module.css';
import Button from '../button/Button';

const Menu = ({
  btnPrimary,
  column,
}: {
  btnPrimary?: boolean;
  column?: boolean;
}) => {
  return (
    <ul
      className={column ? `${styles.navList} ${styles.column}` : styles.navList}
    >
      <div className={column ? styles.column : ''}>
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
        <Button
          btnPrimary={btnPrimary}
          onClick={() => {
            window.location.href = 'mailto:giuliagalizoni@gmail.com';
          }}
        >
          Contact
        </Button>
      </li>
    </ul>
  );
};

export default Menu;

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
          <a
            href='https://github.com/giuliagalizoni'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/giulia-galizoni-caversan/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://drive.google.com/file/d/13H3Dwzr5bQzZxvbmOHPdai53axt29-3N/view?usp=sharing'
          >
            Resume
          </a>
        </li>
      </div>
    </ul>
  );
};

export default Menu;

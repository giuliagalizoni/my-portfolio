import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>Giulia Galizoni</Link>
          </li>
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

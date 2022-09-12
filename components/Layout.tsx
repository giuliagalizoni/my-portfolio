import { AppProps } from 'next/app';
import { Props, ScriptProps } from 'next/script';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: ScriptProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

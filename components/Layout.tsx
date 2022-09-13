import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

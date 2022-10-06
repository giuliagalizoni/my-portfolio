import { useRef, ReactNode } from 'react';
import { useScroll } from 'react-use';

import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);

  console.log(x, y);
  return (
    <div ref={scrollRef} className='layout'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

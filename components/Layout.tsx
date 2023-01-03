import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle?: string;
}) => {
  return (
    <div className='layout'>
      <Head>
        <title>{`${pageTitle ? `${pageTitle} —` : ''} Giulia Galizoni`}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

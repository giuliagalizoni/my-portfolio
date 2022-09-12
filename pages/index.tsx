import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';

import { getContentListData } from '../lib/content';

import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Work from '../components/Work';

export interface ContentListItem {
  id: string;
  summary: string;
  tech: string[];
  title: string;
}

const Home = ({ allContentData }: { allContentData: ContentListItem[] }) => {
  console.log(allContentData);
  return (
    <div>
      <Head>
        <title>Giulia Galizoni</title>
      </Head>
      <Link href='/teste'>Teste</Link>

      <About />
      <Work content={allContentData} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const allContentData = getContentListData();
  return {
    props: {
      allContentData,
    },
  };
}

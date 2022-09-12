import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { getContentListData } from '../lib/content';

import Head from 'next/head';
import About from '../components/About';
import Work from '../components/Work';
import Layout from '../components/Layout';

import smileIcon from '../public/icons/smile.svg';

export interface ContentListItem {
  id: string;
  summary: string;
  tech: string[];
  title: string;
  contentHtml?: string;
}

const Home = ({ allContentData }: { allContentData: ContentListItem[] }) => {
  return (
    <Layout>
      <Head>
        <title>Giulia Galizoni</title>
      </Head>
      <section>
        <h1>Hi! I’m Giulia, a full-stack web developer focusing in MERN.</h1>
        <p>
          I bring passion and creativity in building engaging digital products.
        </p>
      </section>
      <About />
      <Work content={allContentData} />
      <div>
        <img src={smileIcon.src} alt='Smile Icon' />
        <p>That’s all for now</p>
      </div>
    </Layout>
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

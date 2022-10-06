import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getContentListData } from '../lib/content';

import About from '../components/about/About';
import Work from '../components/work/Work';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';

export interface ContentListItem {
  id: string;
  summary: string;
  tech: string[];
  title: string;
  contentHtml?: string;
}

// state: x e y

const Home = ({ allContentData }: { allContentData: ContentListItem[] }) => {
  return (
    <Layout>
      <Head>
        <title>Giulia Galizoni</title>
      </Head>
      <Wrapper>
        <section className={styles.hero}>
          <h1 className={styles.heroHeading}>
            Hi! I’m Giulia, a full-stack web developer focusing in
            <span className={styles.underline}>MERN</span>.
          </h1>
          <p className={styles.heroSubheading}>
            I bring passion and creativity in building engaging digital
            products.
          </p>
        </section>
      </Wrapper>
      <About />

      <Wrapper>
        <Work content={allContentData} />{' '}
      </Wrapper>
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

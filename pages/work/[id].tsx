import { useState, useEffect } from 'react';

import styles from './[id].module.css';
import { getAllContentIds, getContentData } from '../../lib/content';
import { ContentListItem } from '..';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Button from '../../components/button/Button';

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getContentData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllContentIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ postData }: { postData: ContentListItem }) {
  const [scrollY, setscrollY] = useState(0);

  const handleScroll = () => {
    setscrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const { title, contentHtml, tech, id, date, summary, demo, repo } = postData;
  return (
    <div className={styles.bg}>
      <Layout>
        <Wrapper>
          <div className={styles.heading}>
            <img
              src='/icons/star.svg'
              style={{ transform: `rotate(${scrollY}deg)` }}
            />
            <h1>{title}</h1>
            <p>{summary}</p>
            <div className={styles.btns}>
              <Button
                onClick={() => {
                  window.open(demo, '_blank');
                }}
              >
                View demo
              </Button>
              <Button
                onClick={() => {
                  window.open(repo, '_blank');
                }}
              >
                Repository
              </Button>
            </div>
          </div>

          <div className={styles.border}>
            <img src={`/images/${id}.svg`} alt={title} />
          </div>
          <div className={styles.info}>
            <ul>
              {tech.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
            <p>{date}</p>
          </div>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: contentHtml! }}
          />
        </Wrapper>
      </Layout>
    </div>
  );
}

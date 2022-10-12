import Link from 'next/link';
import Image from 'next/image';
import styles from './Work.module.css';

import { ContentListItem } from '../../pages';
import SectionHeading from '../section-heading/SectionHeading';

const Work = ({ content }: { content: ContentListItem[] }) => {
  return (
    <section>
      <SectionHeading sectionName='Work' />
      {content.map((project) => {
        const { title, summary, tech, id } = project;
        return (
          <div key={id}>
            <Link href={`/work/${id}`}>
              <div className={styles.card}>
                <div className={styles.test}>
                  <img src={`/images/${id}.svg`} alt={title} />
                </div>
                <div className={styles.textBox}>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <ul>
                    {tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Work;

import Link from 'next/link';
import Image from 'next/image';
import styles from './Work.module.css';

import { ContentListItem } from '../../pages';
import SectionHeading from '../section-heading/SectionHeading';

import placeholder from '../../public/images/Placeholder.png';

const Work = ({ content }: { content: ContentListItem[] }) => {
  console.log(placeholder);
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
                  <img src='/images/Placeholder.png' alt={title} />
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

import Link from 'next/link';
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
              <div>
                <div>
                  <img src={`../public/images/${id}.svg`} alt={title} />
                </div>
                <div>
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

import { ContentListItem } from '../pages';

const Work = ({ content }: { content: ContentListItem[] }) => {
  return (
    <section>
      <h2>Work</h2>
      {content.map((project) => {
        const { title, summary, tech, id } = project;
        return (
          <div>
            <div>
              <img src={`../public/${id}.svg`} alt={title} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{summary}</p>
              <ul>
                {tech.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Work;

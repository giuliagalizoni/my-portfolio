import { getAllContentIds, getContentData } from '../../lib/content';
import { ContentListItem } from '..';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';

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
  const { title, contentHtml, tech } = postData;
  return (
    // background image goes here
    <div>
      <Layout>
        <Wrapper>
          <h1>{title}</h1>
          <ul>
            {tech.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: contentHtml! }} />
        </Wrapper>
      </Layout>
    </div>
  );
}

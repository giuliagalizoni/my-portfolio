import { getAllContentIds, getContentData } from '../../lib/content';
import { ContentListItem } from '..';
import Layout from '../../components/Layout';

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
  const { title, contentHtml } = postData;
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml! }} />
    </Layout>
  );
}

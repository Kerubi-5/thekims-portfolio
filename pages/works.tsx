import { Layout, SEOHeader } from "components/common";
import WorkCard from "components/post/WorkCard";
import { Container } from "components/ui";
import { getAllWorks } from "hooks/work/get-all-works";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const works = await getAllWorks();

  return {
    props: {
      works,
    },
  };
};

const Works = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const WorkItem = () => {
    return works.map((item, index) => {
      return (
        <li key={item.link}>
          <WorkCard item={item} index={index} />
        </li>
      );
    });
  };

  return (
    <Container>
      <div className="mb-6">
        <SEOHeader
          title="The Projects of John Kim Querobines"
          description="Get inspired by John Kim A. Querobines' portfolio of stunning website creations. See how TheKims.dev can bring your online vision to life with personalized solutions that cater to your entrepreneurial needs."
        />
        <h1 className="text-5xl bg-clip-text text-transparent primary-gradient font-bold pb-2">
          My Works
        </h1>
        <p className="font-mono dark:text-gray-400">
          Here is the compilation of all my works up to date
        </p>
      </div>
      <section>
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {WorkItem()}
        </ul>
      </section>
    </Container>
  );
};

Works.Layout = Layout;

export default Works;

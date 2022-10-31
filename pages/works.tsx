import { Layout } from "components/common";
import { Card } from "components/post";
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
  return (
    <>
      <header>
        <h1 className="text-5xl bg-clip-text text-transparent primary-gradient font-bold mb-6 pb-2">
          My Works
        </h1>
        <p>Here is the compilation of all my works up to date</p>
      </header>

      {works.map((item) => {
        return (
          <div key={item.link}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </>
  );
};

Works.Layout = Layout;

export default Works;

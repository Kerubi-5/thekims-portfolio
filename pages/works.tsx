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
    <div>
      {works.map((item) => {
        return (
          <div key={item.link}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

Works.Layout = Layout;

export default Works;

import { Layout } from "components/common";
import { getAllWorks } from "hooks/work/get-all-works";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";

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
    return works.map((item) => {
      return (
        <li key={item.link}>
          <article className="article p-5 bg-slate-200 dark:bg-slate-800 rounded-sm space-y-2">
            <div className="details max-w-[600px]">
              <h3 className="text-purple-400 text-xl font-bold">
                {item.title}
              </h3>
              {item.excerpt && (
                <p className="prose dark:prose-invert">{item.excerpt}</p>
              )}

              {item.tags?.length > 0 && (
                <ul className="tags flex gap-3 my-2">
                  {item.tags.map((tag) => (
                    <li
                      className="bg-slate-700 text-zinc-300 dark:text-slate-900 dark:bg-zinc-300 max-w-max px-2 py-1 rounded-sm"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="hidden lg:block h-[300px] min-w-[533.33px] relative">
              <Image
                src={item.screenshot.url}
                fill={true}
                alt={item.screenshot.description}
              />
            </div>
          </article>
          <style jsx>{`
            .article {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}</style>
        </li>
      );
    });
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-5xl bg-clip-text text-transparent primary-gradient font-bold pb-2">
          My Works
        </h1>
        <p className="font-mono text-zinc-500">
          Here is the compilation of all my works up to date
        </p>
      </div>
      <section>
        <ul className="grid gap-5">{WorkItem()}</ul>
      </section>
    </>
  );
};

Works.Layout = Layout;

export default Works;

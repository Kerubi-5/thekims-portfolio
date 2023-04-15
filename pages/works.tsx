import { Layout, SEOHeader } from "components/common";
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
    return works.map((item, index) => {
      return (
        <li key={item.link} className="break-inside-avoid">
          <article className="p-5 bg-slate-200 dark:bg-slate-800 rounded-sm space-y-2">
            <div className="hidden md:block md:h-[200px]  lg:h-[250px] max-w-[533.33px] relative">
              <Image
                src={item.screenshot.url}
                fill={true}
                alt={item.screenshot.description}
                sizes="(max-width: 1024px) 533.33px, 20vw"
                priority={index === 1}
                placeholder="blur"
                blurDataURL={`${item.screenshot.url}?lqip`}
                className="object-cover"
              />
            </div>
            <div className="details max-w-[600px]">
              <h3 className="text-purple-600 text-xl font-bold">
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
          </article>
        </li>
      );
    });
  };

  return (
    <>
      <div className="mb-6">
        <SEOHeader
          title="The Projects of John Kim Querobines"
          description="Get inspired by John Kim A. Querobines' portfolio of stunning website creations. See how TheKims.dev can bring your online vision to life with personalized solutions that cater to your entrepreneurial needs."
        />
        <h1 className="text-5xl bg-clip-text text-transparent primary-gradient font-bold pb-2">
          My Works
        </h1>
        <p className="font-mono text-zinc-500">
          Here is the compilation of all my works up to date
        </p>
      </div>
      <section>
        <ul className="md:columns-2 lg:columns-3 space-y-5 gap-5">
          {WorkItem()}
        </ul>
      </section>
    </>
  );
};

Works.Layout = Layout;

export default Works;

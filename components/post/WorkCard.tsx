import Image from "next/image";
import { Work } from "hooks/types";
import { useState } from "react";

const WorkCard = ({ item, index }: { item: Work; index: number }) => {
  const [showContent, setShowContent] = useState(false);
  const maxCharacters = 75;

  return (
    <article className="pb-14 bg-slate-200 dark:bg-slate-800 rounded-sm space-y-2 h-full relative">
      <div className="hidden md:block md:h-[200px] lg:h-[250px] max-w-[533.33px] relative">
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
      <div className="details max-w-[600px] py-1 px-3">
        <h3 className="text-purple-600 dark:text-purple-400 text-xl font-bold">
          {item.title}
        </h3>
        {item.excerpt && (
          <>
            <p className="prose dark:prose-invert inline">
              {/* Empty space after item.excerpt on line 31 is important to add margin between excerpt and read less button */}
              {showContent ? (
                <>{item.excerpt} </>
              ) : (
                <>
                  {item.excerpt.slice(0, maxCharacters)}
                  {item.excerpt.length > maxCharacters && "... "}
                </>
              )}
            </p>

            {item.excerpt.length > maxCharacters && (
              <button
                className="inline text-purple-600 dark:text-purple-400"
                onClick={() => setShowContent(!showContent)}
              >
                {showContent ? "Read less" : "Read more"}
              </button>
            )}
          </>
        )}
        <ul className="tags flex gap-3 mb-2 absolute bottom-1">
          {item.tags?.length > 0 ? (
            <>
              {item.tags.map((tag) => (
                <li
                  className="bg-slate-700 text-zinc-300 dark:text-slate-900 dark:bg-zinc-300 max-w-max px-2 py-1 rounded-sm"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </>
          ) : (
            <li
              className="bg-slate-700 text-zinc-300 dark:text-slate-900 dark:bg-zinc-300 max-w-max px-2 py-1 rounded-sm"
              key={"React"}
            >
              +
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

export default WorkCard;

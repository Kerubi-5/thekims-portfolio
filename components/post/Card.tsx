import Image from "next/image";
import Link from "next/link";

interface ICard {
  title: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

const Card = ({ author, date, image, tags, title }: ICard) => {
  const Tags = () => {
    return (
      <div className="flex gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="text-xs font-mono bg-gray-200 py-1 px-2 rounded-lg"
          >
            {tag}
          </div>
        ))}
      </div>
    );
  };

  return (
    <article className="p-3">
      <Link href="/blog">
        <a>
          <div
            className="mb-3 relative rounded-lg overflow-hidden"
            aria-label="Featured Image"
          >
            <Image
              src="/assets/placeholder.svg"
              width={16}
              height={9}
              layout="responsive"
              objectFit="cover"
              alt="placeholder"
            />
          </div>
          <Tags />
          <h3 className="text-3xl leading-tight font-bold my-2 ">{title}</h3>
          <div className="flex justify-between">
            <p className="text-gray-500">{author}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default Card;

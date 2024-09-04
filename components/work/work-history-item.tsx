import { WorkPlaces } from "hooks/types";

const WorkHistoryItem = ({ title, company, date, description }: WorkPlaces) => {
  return (
    <article key={title + date}>
      <div className="mb-5">
        <h3 className="text-lg dark:text-zinc-200 font-medium">
          {title}{" "}
          <span
            title="Company"
            aria-label="Company"
            className="text-purple-700 dark:text-purple-400"
          >
            @{company}
          </span>
        </h3>
        <small className="dark:text-zinc-300">{date}</small>
      </div>

      <ul className="list">
        {description.map((desc, idx) => (
          <li key={idx} className="dark:text-zinc-400">
            {desc}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WorkHistoryItem;

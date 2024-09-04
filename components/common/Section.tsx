import { ReactNode } from "react";

type Section = {
  title: string;
  description: string;
  children: ReactNode;
};

const Section = ({ title, description, children }: Section) => {
  return (
    <section className="flex flex-col justify-center items-center mb-10 lg:mt-5 max-w-2xl m-auto">
      <div className="sm:py-2 md:py-5 text-center">
        <h2 className="hover:text-gradient">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};

export default Section;

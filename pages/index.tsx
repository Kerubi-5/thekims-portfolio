import { Layout, SEOHeader } from "components/common";
import { ReactNode } from "react";
import { Container } from "components/ui";
import { Email, Phone, ThinkingSvg } from "components/icons";

type Section = {
  title: string;
  description: string;
  children: ReactNode;
};

type WorkPlaces = {
  title: string;
  company: string;
  date: string;
  description: string[];
};

const Home = () => {
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

  const RenderWorkPlaces = ({
    title,
    company,
    date,
    description,
  }: WorkPlaces) => {
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

  const workPlaces: WorkPlaces[] = [
    {
      title: "Web Developer Mentor",
      company: "Refocus",
      date: "Jan 2023 - Present",
      description: [
        "Working Remotely as a Web Developer Mentor specializing in HTML, CSS, Javascript and React, here I am able to use the skills and experiences I was able to learn throughout my web development career",
        "Participate in product development and provide product development services",
        "Provide student counseling services via chat in Intercom",
      ],
    },
    {
      title: "Fullstack Web Developer",
      company: "OnlineJobsPH",
      date: "Mar 2022 - Jan 2023",
      description: [
        "Designed and developed a News Website using Next.js and React Emotion with Contentful as the headless CMS for a JAMStack setup architecture for the website",
        "Also created a prototype for a charity website using the same stack used in the previous project",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Pragtechnologies Corp",
      date: "Aug 2022 - July 2022",
      description: [
        "Trained in using Next.js, React Typescript, Tailwind, Graphql and Shopify",
        "Developed a Next.js project with Typescript and Shopify GraphQL together as a primary requirement to finish the internship programme",
        "Collaborated with a team of 4 to create the prototype of the pragtech website using Next.js with Typescript and Gitlab as a source control for the team",
      ],
    },
  ];

  return (
    <Container>
      <SEOHeader mainPage={true} />
      <header>
        <div className="py-10 lg:pb-[90px] lg:pt-[80px]">
          <p className="text-base text-gray-700 dark:text-gray-400 mb-5 font-mono">
            Hi, my name is
          </p>
          <h1 className="headline">John Kim Querobines</h1>
          <h2 className="subheadline">
            I create high-performance websites with modern technologies and
            practices.
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-[540px]">
            I&apos;m a Registered Freelancer, Game Enthusiast, and many more...
            I’m a web developer specializing in building (and occasionally
            designing) exceptional digital experiences. I&apos;m currently
            working as a frontend developer.
          </p>
        </div>
      </header>
      <Section
        title="About Me"
        description="The developer behind the creation of this website"
      >
        <div className="relative overflow-hidden h-full w-full">
          <ThinkingSvg />
        </div>
        <div className="dark:text-zinc-400 sm:my-5 lg:my-10 space-y-4">
          <p>
            Hi! you can call me Kim. I am a fullstack web developer but mainly a
            front end developer. I graduated with latin honor &quot;Cum
            laude&quot; in Polytechnic University of the Philippines in 2022
            with Bachelor of Science on Information Technology Degree.
          </p>
          <p>
            I am passionate about video games, especially crpg games. I am
            collecting video games in a video game digital distribution called
            steam.
          </p>
          <p>
            If you would like to connect with my steam account here is my
            profile <a href="https://steamcommunity.com/id/kerubi5">Kerubi</a>
          </p>
        </div>
      </Section>
      <Section title="Where I've worked" description="Places I've worked on">
        <div className="workExperiences space-y-5 mt-5">
          {workPlaces.map(RenderWorkPlaces)}
        </div>
      </Section>
      <Section title="What's the move?" description="Drop me a line!">
        <p className="dark:text-zinc-200 text-lg mb-10">
          Let&apos;s explore how we can collaborate and create something
          exceptional together. I&apos;m actively seeking new opportunities and
          partnerships, and I’d love to discuss how my skills as a web developer
          can benefit your projects. You can easily schedule a meeting with me
          through Calendly, or feel free to reach out directly via phone or
          email. I&apos;m excited to connect and see how we can make great
          things happen.
        </p>
        <a
          href="https://calendly.com/jkim-querobines/30min"
          className="border-purple-600 dark:border-purple-400 bg-transparent text-purple-600 dark:text-purple-400 border px-8 py-5 text-xl rounded-sm hover:bg-purple-600 dark:hover:bg-purple-400 transition-colors hover:text-white mb-3"
        >
          Schedule a meeting with me 📅
        </a>

        <small className="dark:text-zinc-400">
          Or you can also contact me on these lines
        </small>
        <div className="socials flex gap-3 mt-3">
          <a
            href="tel:639274678658"
            className="text-purple-400 block"
            aria-label="contact by phone"
          >
            <Phone />
          </a>
          <a
            className="text-purple-400"
            href="mailto:johnkim.consult@thekims.com"
            aria-label="contact by email"
          >
            <Email />
          </a>
        </div>
      </Section>
    </Container>
  );
};

Home.Layout = Layout;

export default Home;

import { WorkPlaces } from "hooks/types";

const workPlaces: WorkPlaces[] = [
  {
    title: "Frontend Developer",
    company: "BaossDev",
    date: "Jul 2023 - Present",
    description: [
      "Develop scalable components using React.js and TypeScript, while adapting to other frameworks like AureliaJS and Electron as needed.",
      "Worked with a large-scale Nx monorepo and utilize Storybook for developing and documenting UI components with a focus on consistency and reusability.",
      "Lead CI/CD pipeline development and project management, especially in startup environments, ensuring efficient deployments and successful project delivery",
      "Collaborate with a large team, mentor peers, write technical documentation, and lead onboarding initiatives to help team members efficiently navigate and complete tasks.",
    ],
  },
  {
    title: "Web Developer Mentor",
    company: "Refocus",
    date: "Jan 2023 - Sept 2023",
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

export const getWorkPlaceList = () => {
  return workPlaces;
};

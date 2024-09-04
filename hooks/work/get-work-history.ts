import { WorkPlaces } from "hooks/types";

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

export const getWorkPlaceList = () => {
  return workPlaces;
};

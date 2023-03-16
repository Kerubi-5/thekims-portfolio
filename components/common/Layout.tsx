import Footer from "./Footer";
import Navbar from "./Navbar";
import { Github, Facebook, LinkedIn, Twitter } from "components/icons";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/Kerubi-5",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/mr.jkimpot",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/john-kim-querobines-4507521b8/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/Kerubi5s",
    },
  ];

  const renderSocialLinks = () =>
    socialLinks.map((item) => (
      <a
        className="flex justify-center items-center p-1 hover:bg-blue-500  hover:-translate-y-1 transition  w-10 h-10 rounded-lg"
        href={item.url}
        key={item.name}
        aria-label={item.name + " link"}
      >
        <item.icon height="28" width="28" />
      </a>
    ));

  return (
    <>
      <Navbar />
      <main className="max-w-7xl p-5 mx-auto min-h-screen">
        <aside className="md:flex flex-col gap-2 fixed left-3 bottom-10 side hidden">
          {renderSocialLinks()}
        </aside>
        <aside className="md:flex flex-col gap-24 fixed -right-20 bottom-0 side hidden">
          <a
            href="mailto:jkim.querobines@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="rotate-90 py-3 hover:-translate-y-1 hover:text-blue-500 transition"
          >
            jkim.querobines@gmail.com
          </a>
        </aside>
        {children}
      </main>
      <style jsx>{`
        .side::after {
          content: "";
          display: block;
          width: 1.5px;
          height: 200px;
          margin: 0px auto;
          background-color: black;
        }
      `}</style>
      <Footer />
    </>
  );
};

export default Layout;

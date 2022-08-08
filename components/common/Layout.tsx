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
        className="flex justify-center items-center p-1 hover:bg-gray-500 transition-colors  w-10 h-10 rounded-lg"
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
      <main className="max-w-7xl px-4 mx-auto min-h-screen">
        <div className="flex flex-col gap-1 fixed top-1/2 -translate-y-1/2 right-3">
          {renderSocialLinks()}
        </div>

        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

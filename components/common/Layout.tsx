import Footer from "./Footer";
import Navbar from "./Navbar";
import { Github, Facebook, LinkedIn, Twitter } from "components/icons";
import ScrollToTop from "components/ui/ScrollToTop";
import { Open_Sans } from "next/font/google";
import {
  SOCIAL_GITHUB,
  SOCIAL_FACEBOOK,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  CONTACT_EMAIL_DISPLAY,
} from "config/seo";

const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  style: ["normal"],
  fallback: ["sans-serif"],
  display: "swap",
  subsets: ["latin"],
});

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const socialLinks = [
    {
      name: "Github",
      icon: Github,
      url: SOCIAL_GITHUB,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: SOCIAL_FACEBOOK,
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      url: SOCIAL_LINKEDIN,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: SOCIAL_TWITTER,
    },
  ];

  const renderSocialLinks = () =>
    socialLinks.map((item) => (
      <a
        className="flex justify-center items-center p-1 bg-purple-300 hover:bg-purple-500  hover:-translate-y-1 transition  w-10 h-10 rounded-lg"
        href={item.url}
        key={item.name}
        aria-label={item.name + " link"}
      >
        <item.icon height="28" width="28" />
      </a>
    ));

  return (
    <div className={`${openSans.className} bg-[#f6f6f6] dark:bg-slate-900`}>
      <Navbar />
      <main className="max-w-7xl p-5 mx-auto min-h-screen">
        <aside className="z-50 md:flex flex-col gap-2 fixed left-4 bottom-10 side hidden">
          {renderSocialLinks()}
        </aside>
        <aside className="z-50 md:flex flex-col gap-24 fixed -right-20 bottom-0 side hidden">
          <a
            href={`mailto:${CONTACT_EMAIL_DISPLAY}`}
            rel="noopener noreferrer"
            target="_blank"
            className="rotate-90 py-3 hover:-translate-y-1 hover:text-purple-400 transition"
          >
            {CONTACT_EMAIL_DISPLAY}
          </a>
        </aside>
        {children}
      </main>

      <Footer />
      <ScrollToTop />
      <style jsx>{`
        .side::after {
          content: "";
          display: block;
          width: 1.5px;
          height: 200px;
          margin: 0.5rem auto;
          background-color: black;
        }

        @media (prefers-color-scheme: dark) {
          .side::after {
            background-color: white;
          }

          .side {
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;

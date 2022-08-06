import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl px-4 mx-auto min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

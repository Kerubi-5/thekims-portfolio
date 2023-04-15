import { ScrollUp } from "components/icons";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isBrowser = () => typeof window !== undefined;

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (!isBrowser()) return;

    function toggleVisibility() {
      setIsVisible(window.pageYOffset > 300);
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]);

  return (
    <button
      className={`z-[1000] bottom-5 right-5 p-3 rounded-full shadow-xl bg-purple-400 hover:bg-purple-600 text-white hover:scale-105 transition-all ${
        isVisible ? "fixed" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ScrollUp />
    </button>
  );
};

export default ScrollToTop;

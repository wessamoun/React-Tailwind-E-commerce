import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [display, setDisplay] = useState("hidden");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setDisplay("fixed");
      } else setDisplay("hidden");
    });
  }, [display]);
  return (
    <div
      onClick={scrollToTop}
      className={`${display} text-white z-50 right-1 bottom-1 bg-orange-600 rounded-full p-2 cursor-pointer font-semibold`}
    >
      Up
    </div>
  );
}

export default ScrollToTop;

import React, { useState, useEffect } from "react";
import { ArrowUpCircle } from "lucide-react"; // Icon mũi tên lên
import "./BackToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={`back-to-top ${visible ? "show" : ""}`} onClick={scrollToTop}>
      <ArrowUpCircle size={40} color="#007bff" />
    </button>
  );
};

export default BackToTop;

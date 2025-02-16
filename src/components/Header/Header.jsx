import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      // Xác định mục đang active
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 📌 Hàm cuộn mượt đến section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Đóng menu mobile khi nhấn
    }
  };

  return (
    <header className={`header ${showNavbar ? "visible" : "hidden"}`}>
      <div className="header-content">
        <h1>Kienai</h1>

        {/* Icon mở menu trên mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "bx bx-x" : "bx bx-menu"}></i>
        </div>

        {/* Navbar */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button className={activeSection === "Home" ? "active" : ""} onClick={() => scrollToSection("Home")}>
                Home
              </button>
            </li>
            <li>
              <button className={activeSection === "About" ? "active" : ""} onClick={() => scrollToSection("About")}>
                About
              </button>
            </li>
            <li>
              <button className={activeSection === "projects" ? "active" : ""} onClick={() => scrollToSection("projects")}>
                Projects
              </button>
            </li>
            <li>
              <button className={activeSection === "Skills" ? "active" : ""} onClick={() => scrollToSection("Skills")}>
                Skills
              </button>
            </li>
            <li>
              <button className={activeSection === "contact" ? "active" : ""} onClick={() => scrollToSection("Contact")}>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

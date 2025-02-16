import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const [buttons, setButtons] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [isBoxMoved, setIsBoxMoved] = useState(false);
  const [boxSize, setBoxSize] = useState(35); // Kích thước hộp theo viewport width (vw)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);

  // Lấy dữ liệu
  useEffect(() => {
    fetch("/data/skill.json")
      .then((response) => response.json())
      .then((data) => setButtons(data.skill))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Xử lý khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsBoxMoved(false);
        setSelectedButton(null);
      }
    };

    if (isBoxMoved) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBoxMoved]);

  // Cập nhật khi resize màn hình
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setBoxSize(window.innerWidth < 768 ? 70 : 35);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Di chuyển button ngẫu nhiên nếu hộp chưa bị trượt đi
  useEffect(() => {
    if (!isBoxMoved) {
      const interval = setInterval(() => {
        setButtons((prevButtons) =>
          prevButtons.map((btn) => ({
            ...btn,
            top: Math.random() * 80,
            left: Math.random() * 80,
          }))
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isBoxMoved]);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setIsBoxMoved(true);
  };

  return (
    <section className="Skills" id="Skills">
      <h2>
        Skills
      </h2>
      <p>"Here are my skills"</p>
      <div className="chaos-container" ref={containerRef}>
        <div className={`chaos-box ${isBoxMoved ? (isMobile ? "hide-box" : "move-left") : ""}`} style={{ width: `${boxSize}vw`, height: `${boxSize}vw` }}>
          {buttons.map((btn) => (
            <button key={btn.id} className="chaos-button" style={{ top: `${btn.top}%`, left: `${btn.left}%` }} onClick={() => handleButtonClick(btn)}>
              <i className={btn.icon}></i>
            </button>
          ))}
        </div>

        {isBoxMoved && selectedButton && (
          <div className={`info-box ${isBoxMoved ? "show-info" : ""}`}>
            <h3>{selectedButton.name.toUpperCase()}</h3>
            <p>{selectedButton.info}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

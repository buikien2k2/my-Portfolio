import React, { useState, useEffect } from "react";
import "./LoadingPage.css";
import { CheckCircle } from "lucide-react"; // Icon dấu tích xanh
import logo from "../../assets/avatar.jpg"; // Thay logo.png bằng ảnh của bạn

const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setDone(true);
          return 100;
        }
        return oldProgress + 1; // Mỗi lần tăng 1%
      });
    }, 50); // Cập nhật mỗi 50ms

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (done) {
      setIsFading(true);
      setTimeout(onFinish, 2000); // Chờ hiệu ứng mờ xong rồi chuyển trang
    }
  };

  return (
    <div className={`loading-container ${isFading ? "fade-out" : ""}`} onClick={handleClick}>
      <h2 className="title">My Portfolio</h2>
      <div className="loading-circle">
        <img src={logo} alt="Logo" className="loading-image" />
      </div>
      <p className="progress-text">{progress}%</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: done ? "#28a745" : "#007bff",
          }}
        />
        {done && <CheckCircle className="check-icon" size={24} color="#28a745" />}
      </div>
      {done && <p className="click-text">Click để tiếp tục</p>}
    </div>
  );
};

export default Loading;

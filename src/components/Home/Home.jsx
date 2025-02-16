import React, { useState } from "react";
import "./Home.css";
import Me from "../../assets/avatar.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="Home" id="Home">
      <div className="home-content">
        <div className="introduce">
          <h1>
            Hi, I'm <span>Bui Nguyen Trung Kien</span>
          </h1>
          <div className="text-animated">
            <h3>Frontend Developer</h3>
          </div>
          <p>
            Passionate about building beautiful and functional websites. I love
            turning ideas into reality with code! 🚀
          </p>
          <div className="btn-box">
            <button className="btn" onClick={() => setIsModalOpen(true)}>
              Hire me
            </button>
          </div>
        </div>
        <div className="avatar">
          <div className="avatar-img">
            <img src={Me} alt="Avatar" />
          </div>
          <div className="circle-btn">
            <a href="https://www.facebook.com/kien.ai.52/">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="https://www.instagram.com/kienai74/">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/buikien2k2">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Contact Me</h3>
            <p>Please contact me via phone, email, or Zalo. I will get back to you as soon as possible.</p>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

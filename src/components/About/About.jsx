import React from 'react';
import './About.css';
import Me from '../../assets/avatar.jpg';

const About = () => {
  return (
    <section id="About" className="About">
      <h2>About Me</h2>
      <p>"Introduce a little about myself as well as my personal information."</p>
      <div class="About-content">
        <div class="avatar-prof">
          <div class="avatar-img">
              <img src={Me} alt="Avatar"/>
          </div>
          <div class="btn-box">
            <a href="https://drive.google.com/uc?export=download&id=1brvTLHMNRTLTlxcVcDQflEOhuUM7mr3r" class="btn">Download CV</a>
          </div>
        </div>
        <div class="my-profile">
            <div class="text-profile">
              <p>Hello! My name is Bùi Nguyễn Trung Kiên, I’m 23 years old and currently studying at Saigon University. I have a strong passion for technology, especially web development. With knowledge in HTML, CSS, JavaScript, ReactJS, and Firebase, I am always eager to learn and enhance my skills. I aspire to work in a professional environment where I can contribute and grow.</p>
            </div>
            <div class="info-profile">
              <table class="profile-table">
                <tbody>
                {/* <tr>
                  <th colspan="2">Thông Tin Cá Nhân</th>
                </tr> */}
                <tr>
                  <td><strong>👤 Fullname</strong></td>
                  <td>Bui Nguyen Trung Kien</td>
                </tr>
                <tr>
                  <td><strong>💼 Role</strong></td>
                  <td>Frontend Developer</td>
                </tr>
                <tr>
                  <td><strong>📧 Email</strong></td>
                  <td>kienai2k2@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>📍 Address</strong></td>
                  <td>Binh Tan, Ho Chi Minh city, Viet Nam</td>
                </tr>
                <tr>
                  <td><strong>📞 Phone</strong></td>
                  <td>070865087</td>
                </tr>
                <tr>
                  <td><strong>💻 Program Language</strong></td>
                  <td>Javascript, Python, Java, C#</td>
                </tr>
                <tr>
                  <td><strong>🛠️ Framework</strong></td>
                  <td>ReactJS, SpringBoot</td>
                </tr>
                <tr>
                  <td><strong>🗄️ Database</strong></td>
                  <td>MySQL, Firebase</td>
                </tr>
                <tr>
                  <td><strong>🛠️ Other</strong></td>
                  <td>Figma, Draw.io, Basamiq</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
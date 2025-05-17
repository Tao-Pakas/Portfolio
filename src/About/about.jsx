import React, { useState } from 'react';
import pic from '../assets/images/Tao.svg';
import cv from "/assets/cv/Taonashe Pakachena.pdf";
import style from './about.module.css';

function AboutMe() {
  const [activeSection, setActiveSection] = useState('Who i am');

  const renderContent = () => {
    switch (activeSection) {
      case 'Who i am':
        return (
          <p>
            Hi! I'm Taonashe Pakachena, a passionate Junior Software Developer. I
            specialize in building responsive, accessible web applications using
            JavaScript, React, and modern frameworks, always expanding my skills to stay
            current.
            <br /><br />
            I thrive on solving real-world problems through clean, efficient code and
            intuitive design. Whether collaborating with a team or working independently,
            I bring a proactive mindset, attention to detail, and a love for learning.
            <br /><br />
            Currently seeking opportunities to contribute my skills, grow alongside
            experienced developers, and make an impact in a professional environment.
          </p>
        );
      case 'personal':
        return (
          <div style={{ padding: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '0.5rem', borderBottom: '1px solid #ccc', width: '100px' }}>Full Name</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Taonashe Pakachena</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Age</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>21</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Gender</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Male</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>Education</td>
                  <td style={{ padding: '0.5rem', borderBottom: '1px solid #ccc' }}>
                    Currently pursuing an undergraduate degree in Information Technology
                  </td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 'bold', padding: '0.5rem' }}>Location</td>
                  <td style={{ padding: '0.5rem' }}>Harare, Zimbabwe</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <section id="about">
      <div className={style.aboutme}>
        <div className={style.image}>
          <img src={pic} alt="My profile" />
        </div>
        <div className={style.info}>
          <h1 className={style.head}>About Me!</h1>
          <div className={style.titles}>
            <h3
              className={activeSection === 'Who i am' ? style.activeTab : ''}
              onClick={() => setActiveSection('Who i am')}
            >
              Who I Am
            </h3>
            <h3
              className={activeSection === 'personal' ? style.activeTab : ''}
              onClick={() => setActiveSection('personal')}
            >
              Personal Info
            </h3>
          </div>
          <div className={style.content}>{renderContent()}</div>
          <a href={cv} download="Taonashe_CV.pdf">  {/* Added explicit filename */}
            <button className={style.downloadBtn}>
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
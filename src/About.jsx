import React from "react";
import "./App.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-text"></div>
      </section>

      <section className="section text-center">
        <h2 className="section-title">🎯 Aim</h2>
        <p className="section-subtext">
          Establish Cyber-security Ecosystem in India
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Objectives</h2>
        <div className="grid objectives">
          <div className="card">🔰 Develop Security Solutions</div>
          <div className="card">✅ Provide Security Services</div>
          <div className="card">🛡 Establish Cyber-security Ecosystem</div>
          <div className="card">
            🏅 Create Next-gen Cybersecurity Professionals
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Ecosystem Partners</h2>
        <div className="partner-list">
          <div>C3i Center</div>
          <div>IIT Kanpur</div>
          <div>Incubation and Innovation</div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Executive Team</h2>
        <div className="grid team">
          <div className="card">
            <h3 className="card-title">Prof. Manindra Agrawal</h3>
            <p className="card-text">
              Chairman at C3iHub and Professor at IIT Kanpur, expert in
              computational number theory and cryptography. Padma Shri awardee
              (2013).
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Prof. Surender Baswana</h3>
            <p className="card-text">
              Interim Program Director at C3iHub, Professor at IIT Kanpur with
              research in graph and dynamic algorithms.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Cybersecurity Training</h2>
        <div className="grid training">
          <div className="card">🛡 Cyber Security</div>
          <div className="card">🔥 Cyber Defence</div>
          <div className="card">🌐 Network Security</div>
          <div className="card">🕵️‍♂️ Deception Technology</div>
          <div className="card">🔍 Cyber Forensics</div>
          <div className="card">🏗 Critical Infrastructure Security</div>
          <div className="card">🔐 Cryptography</div>
          <div className="card">🔗 Blockchain Technology & Applications</div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import "./App.css";

const focusItems = [
  {
    icon: "🛡️",
    title: "Critical Infrastructure Security",
    description: "Dedicated Indigenous Technologies for Critical Infrastructure"
  },
  {
    icon: "🗄️",
    title: "Tamper-proof Data Storage",
    description: "Immutable, Sharable, Globally Verifiable"
  },
  {
    icon: "📡",
    title: "Network Security",
    description: "Threat Detection, Analytics & Prevention"
  },
  {
    icon: "🔍",
    title: "Cybercrime Investigation",
    description: "Illicit Activities Tracing & Investigation"
  },
  {
    icon: "⚙️",
    title: "Hardware Security",
    description: "Securing Supply Chain"
  },
  {
    icon: "📱",
    title: "Mobile Security",
    description: "Securing Mobile Devices & Applications"
  }
];

const FocusAreas = () => {
  return (
    <section className="focus-section">
      <h2 className="focus-title">
        Focus <span>Areas</span>
      </h2>
      <p className="focus-subtext">
        Discover our comprehensive approach to delivering exceptional results across multiple domains
      </p>
      <div className="focus-grid">
        {focusItems.map((item, index) => (
          <div key={index} className="focus-card">
            <div className="icon">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
            <div className="plus-button">+</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusAreas;

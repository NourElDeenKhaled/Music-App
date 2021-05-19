import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <p className="title">{title}</p>
      <div className="section-subtitle">
        <p className="section-subtitle-text">{subtitle}</p>
        <button>View All</button>
      </div>
    </div>
  );
};

export default SectionTitle;

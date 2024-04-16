import React from "react";

const HeroBanner = ({ title, breadcrumbTitle, bgImg }) => {
  return (
    <div
      className="serviceHeroBanner"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="content">
        <h1>{title}</h1>
        <span>Home &gt; Treatments &gt; {breadcrumbTitle} </span>
      </div>
    </div>
  );
};

export default HeroBanner;

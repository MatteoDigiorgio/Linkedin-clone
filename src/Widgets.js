import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticleData = [
    { heading: "Italian salaries down", subtitle: "1.454 readers" },
    {
      heading: "The first hybrid train of Trenitalia",
      subtitle: "186 readers",
    },
    { heading: "When we lack expertise", subtitle: "106 readers" },
    { heading: "POLL: What is your soft skill?", subtitle: "3.372 readers" },
    { heading: "Rearranged in fuels in Italy", subtitle: "338 readers" },
  ];

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticleData.map((article) =>
        newsArticle(article.heading, article.subtitle)
      )}
    </div>
  );
}

export default Widgets;

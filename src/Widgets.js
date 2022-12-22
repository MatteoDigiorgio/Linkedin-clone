import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
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
      {newsArticle("Italian salaries down", "1.454 readers")}
      {newsArticle("The first hybrid train of Trenitalia", "186 readers")}
      {newsArticle("When we lack expertise", "106 readers")}
      {newsArticle("POLL: What is your soft skill?", "3.372 readers")}
      {newsArticle("Rearranged in fuels in Italy", "338 readers")}
    </div>
  );
}

export default Widgets;

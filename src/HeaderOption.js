import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {/* If it's passing an icon, it should render the icon as a component */}
      {Icon && <Icon className="headerOption__icon" />}
      {/* If it's passing an avatar, it should render the avatar as a component */}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

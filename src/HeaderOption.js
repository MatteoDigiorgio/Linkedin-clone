import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  const splitName = user ? user.displayName.split(" ") : "";

  const userInitials = splitName
    ? splitName[0][0].concat("", splitName[1][0])
    : "Y";

  return (
    <div onClick={onClick} className="headerOption">
      {/* If it's passing an icon, it should render the icon as a component */}
      {Icon && <Icon className="headerOption__icon" />}
      {/* If it's passing an avatar, it should render the avatar as a component */}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {userInitials}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

import React from "react";
import classes from "./SideBarOptions.module.css";
const SideBarOptions = ({ Icon, title, number }) => {
  return (
    <div
      className={classes.sidebarOptions}
    >
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
};

export default SideBarOptions;

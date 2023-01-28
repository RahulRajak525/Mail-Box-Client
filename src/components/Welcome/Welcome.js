import React from "react";
import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={classes.welcome}>
      <div>
        <h1>Welcome to React Mail Box</h1>
      </div>
      <div>
       Please Login First to take ride! 
      </div>
      {/* <img alt="Rahul rajak"/> */}
    </div>
  );
};

export default Welcome;

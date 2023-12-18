import React from "react";
import Box3x3 from "../Box3x3/Box3x3";
import classes from "./Box9x9.module.css";
const Box9x9 = ({getId}) => {
    // Структура боксов
        // |  1  2  3 |
        // |  4  5  6 |
        // |  7  8  9 |
    return (
        <div className={classes.BigBox}>
        <div className={classes.Box9x3}>
      <Box3x3 click={getId} id={"One"} boxid={1}/>
      <Box3x3 click={getId} id={"Two"} boxid={2}/>
      <Box3x3 click={getId} id={"Three"} boxid={3}/>
      </div>
      <div className={classes.Box9x3}>
      <Box3x3 click={getId} id={"Four"} boxid={4}/>
      <Box3x3 click={getId} id={"Five"} boxid={5}/>
      <Box3x3 click={getId} id={"Six"} boxid={6}/>
      </div>
      <div className={classes.Box9x3}>
      <Box3x3 click={getId} id={"Seven"} boxid={7}/>
      <Box3x3 click={getId} id={"Eight"} boxid={8}/>
      <Box3x3 click={getId} id={"Nine"} boxid={9}/>
      </div>
        </div>
    );
};

export default Box9x9;

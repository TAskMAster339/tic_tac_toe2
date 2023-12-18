import React from "react";
import Block from "../block/block";
import classes from './Box3x3.module.css'
const Box3x3 = ({click, boxid, id }) => {
    return (
        // Block№n
        // |  LT(1)  T(2)  RT(3) |
        // |  L(4)   M(5)  R (6) |
        // |  LB(7)  B(8)  RB(9) |
        // ID-шники так сделаны, что было удобно их согласовывать.(Они не теряют своей уникальности)
        <div className={classes.outer} id = {id}>
        <div className={classes.block3x1}>
      <Block func={click} id={"LEFTTOP-(1)"+ boxid} state={''} box_id={id}/>
      <Block func={click} id={"TOP-----(2)" + boxid} state={''} box_id={id}/>
      <Block func={click} id={"RIGHTTOP(3)"+ boxid} state={''} box_id={id}/>
      </div>
      <div className={classes.block3x1}>
      <Block func={click} id={"LEFT----(4)"+ boxid} state={''} box_id={id}/>
      <Block func={click} id={"MIDDLE--(5)"+ boxid} state={''} box_id={id}/>
      <Block func={click} id={"RIGHT---(6)"+ boxid} state={''} box_id={id}/>
      </div>
      <div className={classes.block3x1}>
      <Block func={click} id={"LEFTBOT-(7)"+ boxid} state={''} box_id={id}/>
      <Block func={click} id={"BOT-----(8)" + boxid} state={''} box_id={id}/>
      <Block func={click} id={"RIGHTBOT(9)"+ boxid} state={''} box_id={id}/>
      </div>  
        </div>
    );
};

export default Box3x3;

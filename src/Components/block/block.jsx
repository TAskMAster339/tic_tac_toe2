import React from "react";
import classes from "./block.module.css"

const Block = (props) => {
    return (
        <div>
            <div className={classes.Block} onClick={() => props.func(props.id, props.box_id)} id={props.id}>
                    {props.state}   
            </div>
        </div>
    );
};

export default Block;

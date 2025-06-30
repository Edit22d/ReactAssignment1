import React from "react";
import  MissedGoal  from "./MissedGoal";
import MadeGoal from "./MadeGoal";


function Goal(props) {
    const isGoal = props.isGoal;
    // console.log(isGoal, 'goal')
    if(isGoal) {
        return <MissedGoal/>;
    }
    return <MadeGoal/>;
}


export default Goal;
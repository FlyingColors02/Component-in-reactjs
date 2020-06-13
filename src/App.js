import React from "react";
import UserProfile from "./userprofile";
import ViewSection from "./read.view";
const APP =()=>{
    return(
    <div className="container">
        <ViewSection>
            <UserProfile name="John Doe" work="Web Developer"/>
        </ViewSection>
        <ViewSection>
            <UserProfile name="Emma Doe" work="Software Developer"/>
        </ViewSection>
        <ViewSection>
            <UserProfile name="Mack Doe" work="Tester"/>
        </ViewSection>
    </div>
    ) 
 };
 export default APP; 
import React from "react";
import Faker from "faker";

const UserProfile=(props)=>{
    return(
        <div className="row" style={{"marginTop":"20px"}}>
            <div className="col-md-3">
                <img src={Faker.image.avatar()} alt="people"/>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger btn-md">{props.name}</button>
            </div>
            <div className="col-md-12">
                <h3>{props.work}</h3>
            </div>
        </div>
    )
    
}

export default UserProfile;
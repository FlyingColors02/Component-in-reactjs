import React from "react";
const ViewSection =(props)=>{
    return(
        <React.Fragment>
        <div className="card text-left">
          <div className="card-body">
              {props.children}
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-outline-primary" >read more</button>
            <button type="button" className="btn btn-outline-primary" style={{"marginLeft":"20px"}}>view more</button>
          </div>
          
        </div>
        
        </React.Fragment>
    )
}

export default ViewSection; 
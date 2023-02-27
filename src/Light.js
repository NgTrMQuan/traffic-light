import React from "react";

const Light = ({color, lit,setLit}) => {
    return(
        <><div>
            <div className="light" style={{ backgroundColor: color === lit ? color : "grey" }}>
            </div>
        </div>
        <button className="btn" onClick={() => setLit(color)}>
            <span>
                Change Me
            </span>
        </button></>
    )
}

export default Light;
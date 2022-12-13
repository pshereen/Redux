import React from "react";

// const Employee = (props) => {
const Employee = ({firstName, lastName : lname}) => {
    //const {firstName, lastName : lname} = props;
    return(
        <div>
            {/* <h6> {`Employee Name: ${props.firstName} ${props.lastName}`}</h6> */}
            <h6> {`Employee Name: ${firstName} ${lname}`}</h6> 
        </div>
        
    )
}

export default Employee;
import React from "react";

// const Employee = (props) => {
const EmployeeDestruct= () => {
    const emp = {
        name:"Jack",
        age:"34",
        address:{
            street:"111, Halford Street",
            state : "CA",
            country:"US",
            zip:95555
        }
    }
    const{name, age, address:{street, state, zip}} = emp ;
    return(
        <div>
            {/* <h6> {`Employee Name: ${props.firstName} ${props.lastName}`}</h6> */}
            <h6> {`Employee Deatils: Name:${name}, age: ${age}, address: street:${street}, state:${state},zip: ${zip}`}</h6> 
        </div>
        
    )
}

export default EmployeeDestruct;
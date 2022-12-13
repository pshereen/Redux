import React, {useState} from 'react';
const Counter = () => {
    const[count, setCount] = useState(0);
    return(
        <React.Fragment>
            <p><h1 style={{color: 'blue'}}> This counter is: {count} </h1></p>
            <button onClick = {() => setCount(count + 1) }> Increment </button>
            <button onClick = {() => setCount(count - 1)}> Decrement </button>
        </React.Fragment>
    )
};

export default Counter

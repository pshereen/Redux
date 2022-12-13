import React, { useState } from 'react';
import Counter from './Counter_useState' ;
const CounterConditionalrendering = () =>{
    const [showCounter, setShowCounter] = useState(false);
    return (
        <div>
            <button onClick = {()=>setShowCounter(!showCounter)}>
                {showCounter? "Hide Counter" : "Show Counter"}
            </button>
            {showCounter && <Counter />}
        </div>
    )
}

export default CounterConditionalrendering
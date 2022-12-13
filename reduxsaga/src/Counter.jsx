import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';

const Counter = (props ) => {
    const { name } = props ;
    const dispatch = useDispatch();

    const [individualCount, setIndividualCount] = useState(0);

    

    const handleIncrement = () => {
        dispatch(increment())
        setIndividualCount(individualCount + 1)
    }

    const handleDecrement = () => {
        dispatch(decrement())
        setIndividualCount(individualCount - 1)
    }

    return(
        <div style = {{backgroundColor: "gray"}}>
            <h2> { name } </h2>
            <h3>{`Local Count: ${individualCount}`}</h3>
            <div style = {{ display: "flex", justifyContent: "Center "}}>
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>
            </div>
        </div>
    );
}

export default Counter ;

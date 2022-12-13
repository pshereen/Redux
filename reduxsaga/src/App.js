import React, {useEffect} from 'react' ;
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {getUser} from './redux/ducks/user' ;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser()) ;
  }, [dispatch])
  
  const user = useSelector((state) => state.user.user)
  console.log(user);
 return (
    <div className="App">
      { user &&  <h1> Hello , {user.firstname}</h1>}
    </div>
  );
}

export default App;

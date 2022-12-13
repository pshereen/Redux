import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter'

function App() {
  const count = useSelector((state) => state.counter.count) //couter from configureStore.js & count from counter.js in the ducks folder.
  const candidates = ["Anthony Sistilli", "Bob Smith", "Stephanie Foo"]
  return (
    <div className="App">
      <h1> Redux Made Easy</h1>
      <h2> Total count is: {count} </h2>
      {candidates.map(candidate => (
        <Counter name = {candidate} /> 
      ))}
    </div>
  );
}

export default App;

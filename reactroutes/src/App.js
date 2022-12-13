//import './App.css';
import './index.css';
import Todos from './Todos';
import Todo from './Todo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Todos />} />
          <Route path = "/todo/:id" element = {<Todo />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

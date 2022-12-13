import './App.css';
import Counter from './Counter_useState' ;
import Employee from './employee_props'
import EmployeeDestruct from './employee_Destructuring';
import Conditionalrendering from './LoginConditionalRendering';
import CounterConditionalrendering from './CounterConditionalRendering';
const employeeInfo = [
  {firstName: "Jack",
   lastName : "Smith"
  },
  {firstName: "Stephanie",
   lastName : "James"
  },
  {firstName: "Ruben",
   lastName : "SmiAlexth"
  }
];
const A = [1,2,3,4,5,6,7];
//let a, b, rest
const [a,b,c, ...rest] = A;
console.log(a,b,c, rest)
const emp = {firstName: "Ruben",
lastName : "SmiAlextAlexh"
}
const{firstName, lastName} = emp;
console.log(firstName, lastName);
console.log(true&& null && 120)

console.log(Object.prototype.toString.call(new (function Custom(){})()));
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Conditionalrendering />
        Welcome to my Counter
        <Counter />

        {employeeInfo.map(employee =>{
         // const {firstName, lastName} = employee;
            return(
              // <Employee firstName={firstName} lastName={lastName} />
              <Employee {...employee} />
            );

        })}

        {/* <Employee firstName = "Jack" lastName = "Smith" />
        <Employee firstName = "Stephanie" lastName = "James" />
        <Employee firstName = "Ruben" lastName = "Alex" /> */}
        <EmployeeDestruct />
        <CounterConditionalrendering />
      </header>
      
    </div>
  );
}

export default App;

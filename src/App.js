import './App.css';
import Greet from './Greet/Greet';
import Goal from './Goal/Goal';
import Garage from './Garage/Garage';

function App() {
  const firstName = "Nabwire";
  const secondName = "Edith";
  const friend = "Latifah";

  return (
    <div className="App">
      <h1>Learning</h1>
      
      <Greet name={firstName} age="21" school="WITI" address="Mulango" />
      <Greet name={secondName} age="22" school="WITI" address="Kamwokya" />
      <Greet name={friend} age="21" school="WITI" address="Kitenzi" />

      <div className="Goal">
        <Goal />
        <Goal isGoal={true} /> 
      </div>

      <div className="Garage">
        <Garage />
      </div>
    </div>
  );
}

export default App;

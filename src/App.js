
import './App.css';
import Greet from './Greet'
function App() {
  const firstName="Nabwire";
  const secondName="Edith";
  const friend="Latifah";
  return (
    <div className="App">
      <h1>Learning</h1>
      <Greet name={firstName} age='23' school='WITI' address='nabwiredith18@gmail.com'/>
      <Greet name={secondName}  age='22' school='WITI' address='edith@gmail.com'/>
      <Greet name={friend}  age='21' school='WITI' address='muhammadlatifa26@gmail.com'/>
      </div>
  )

}

export default App;

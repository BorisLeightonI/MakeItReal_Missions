import logo from './logo.svg';
import './App.css';
import Count from './Components/Count';
import Button from './Components/Button';
import { ADD, DIV, MULT, RES } from './store/reducers/count.reducer';

function App() {
  return (
    <div className="App">
      <Count/>
      <Button type={ADD}>Add 2</Button>
      <Button type={RES}>Minus 2</Button>
      <Button type={MULT}>Multiply by 2</Button>
      <Button type={DIV}>Divide by 2</Button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';
import { DECREMENT, INCREMENT } from './Store/Reducers/count.reducer';
import Posts from './Components/Posts';
import Text from './Components/Text';
import InputText from './Components/InputText';

function App() {
  return (
    <div className="App">
      <h1>Configurando redux-toolkit en nuestro proyecto</h1>
      <Counter />
      <Button type={INCREMENT}>Incrementar</Button>
      <Button type={DECREMENT}>Decrementar</Button>
      {/* <Posts /> */}
      {/* <InputText/> */}
      {/* <Text/> */}
    </div>
  );
}

export default App;

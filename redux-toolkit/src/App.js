import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';
// import { DECREMENT, INCREMENT } from './Store/Reducers/count.reducer';
import Posts from './Components/Posts';
import Text from './Components/Text';
import InputText from './Components/InputText';
import { decrement, increment } from './Store/Reducers/CountSlice';

function App() {
  return (
    <div className="App">
      <h1>Configurando redux-toolkit en nuestro proyecto</h1>
      <Counter />
      <Button type={increment}>Incrementar</Button>
      <Button type={decrement}>Decrementar</Button>
      <InputText/>
      <Text/>
      <Posts />
    </div>
  );
}

export default App;

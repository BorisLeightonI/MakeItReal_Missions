import './App.css';
import Counter from './Components/Counter';
import Button from './Components/Button';
// import { DECREMENT, INCREMENT } from './Store/Reducers/count.reducer';
import Posts from './Components/Posts';
import Text from './Components/Text';
import InputText from './Components/InputText';
import { decrement, decrementBy, increment, incrementBy } from './Store/Reducers/CountSlice';
import Cart from './Components/Cart';
import InputToCart from './Components/InputToCart';

function App() {
  return (
    <div className="App">
      <h1>Configurando redux-toolkit en nuestro proyecto</h1>
      <Counter />
      <Button type={increment}>Incrementar</Button>
      <Button type={decrement}>Decrementar</Button>
      <Button type={()=>incrementBy(2)}>Incrementar por 2</Button>
      <Button type={()=>decrementBy(2)}>Decrementar por 2</Button>
      <InputText/>
      <Text/>
      <InputToCart/>
      <Cart/>
      <Posts />
    </div>
  );
}

export default App;

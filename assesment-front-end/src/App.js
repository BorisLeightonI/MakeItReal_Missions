import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

function App() {

  return (
    <div className="App">
      <nav style={ {display:'flex', justifyContent: 'space-between', width: '25%', margin: '0 auto'} }>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/prodDetail/:prodId' element={<ProductDetail/>}/>
      </Routes>
     
    </div>
  );
}

export default App;

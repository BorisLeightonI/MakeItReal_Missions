import {useEffect, useRef} from 'react'
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

function App() {
  const ref = useRef()
  useEffect(()=>{
    // const socket = io('http//localhost:8080')
    ref.current = io('http//localhost:8080')
    ref.current.on('welcome', (data)=>console.log('WELCOME: ', data.message))

    ref.current.on('broadcast', (data)=>{
      console.log('broadcast:',data)
    })

    ref.current.on('private', (data)=>{
      console.log('PRIVATE:', data);
    })

    return ()=>{ /*Desmontaje de useEffect*/
      ref.current.close()
      ref.current.removeAllListeners()
    }
  }, [])

  const handleEmit = ()=>{
    ref.current.emit('message', 'Hola a todos')
    //problema de scope con socket, se use useRef
  }
  const handleJoin = ()=>{
    ref.current.emit('join room', `private${'p1'}${'p2'}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Clase de web sockets</h1>
        <button onClick={handleEmit}>Enviar</button>
        <button onClick={handleJoin}>Enviar Local</button>
      </header>
    </div>
  );
}

export default App;

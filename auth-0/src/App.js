import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated?(<>
        <h1>Hola {user.name}</h1>
        <div>
          <img src={user.picture} alt={user.name} loading='lazy'/>
        </div>
        <button onClick={logout}>Logout</button>
      </>): <>
        <button onClick={()=>loginWithRedirect()}>Login</button>
        <button onClick={()=>loginWithRedirect({connection: 'google-oauth2'})}>Login Gmail</button>
      </>
      }
      
    </div>
  );
}

export default App;

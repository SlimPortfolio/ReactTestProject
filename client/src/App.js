import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Events from './Components/Events';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSuccessful from './Components/LoginSuccessful';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/loginsuccess' element={<LoginSuccessful />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

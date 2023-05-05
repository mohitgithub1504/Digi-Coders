import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Main from './components/main';
import TrainerLogin from './components/main/TrainerLogin';
import TrainerSignup from './components/main/TrainerSignup';
import Course from './components/main/Course';
import About from './components/main/About';
import Contact from './components/main/Contact';
import Chapter from './components/main/Chapter';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Navigate to="/main/home" />} />
        <Route path='main' element={<Main />} >

          <Route path='home' element={<Home />} />
          <Route path='course' element={<Course />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='chapter' element={<Chapter />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='trainerlogin' element={<TrainerLogin />} />
          <Route path='trainersignup' element={<TrainerSignup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

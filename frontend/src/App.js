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
import Builder from './components/trainer/Builder';
import DesignChapter from './components/trainer/DesignChapter';
import Trainer from './components/trainer';
import ManageCourse from './components/trainer/ManageCourse';
import ManageChapter from './components/trainer/ManageChapter';
import StudentSignup from './components/main/StudentSignup';
import StudentLogin from './components/main/StudentLogin';
import BlockProvider from './context/BlockContext';
import User from './components/user';
import BrowseChapters from './components/user/BrowseChapters';
import ViewChapter from './components/user/ViewChapter';
import ChapterDetails from './components/user/ChapterDetails';
import TrainerAuth from './auth/TrainerAuth';
import ForgetPassword from './components/main/ForgetPassword';
import UserProvider from './context/UserContext';
import TrainerProvider from './context/TrainerContext';
import TrainerProfile from './components/trainer/TrainerProfile';
import UserProfile from './components/user/UserProfile';

function App() {
  return (

    <BrowserRouter>
      <BlockProvider>
        <UserProvider>
          <TrainerProvider>
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
                <Route path='studentlogin' element={<StudentLogin />} />
                <Route path='studentsignup' element={<StudentSignup />} />
                <Route path='trainerlogin' element={<TrainerLogin />} />
                <Route path='trainersignup' element={<TrainerSignup />} />
                <Route path='forgetpassword' element={<ForgetPassword />} />

              </Route>
              <Route path='trainer' element={<TrainerAuth><Trainer /> </TrainerAuth>}>
                <Route path='builder' element={<Builder />} />
                <Route path='trainerprofile' element={<TrainerProfile />} />
                <Route path='designchapter' element={<DesignChapter />} />
                <Route path='managechapter' element={<ManageChapter />} />
                <Route path='managecourse' element={<ManageCourse />} />
              </ Route>

              <Route path='user' element={<User />}>
                <Route path='userprofile' element={<UserProfile/>} />
                <Route path='browsechapters' element={<BrowseChapters />} />
                <Route path='chapterdetails/:id' element={<ChapterDetails />} />
              </ Route>

            </Routes>
          </TrainerProvider>
        </UserProvider>
      </BlockProvider>
    </BrowserRouter>
  );
}

export default App;

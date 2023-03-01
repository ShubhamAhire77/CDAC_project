import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import AdminHome from './components/Admin/AdminHome';
import CounsellorHome from './components/Counsellor/CounsellorHome';
import PatientHome from './components/Patient/PatientHome';
import ab from './bg.jpg';

import { useSelector } from 'react-redux';
import LogOutComp from './components/LogOutComp';
import CounsellorRegister from './components/Register/CounsellorRegister';


function App() {


const mystate = useSelector((state) => state.logged);

  return (

    <div className="App">

<div style={{display:mystate.loggedIn?"none":"block"}}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="">MindMatter</a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="login" class="nav-link" >Login</Link>
              </li>
              <li class="nav-item">
                <Link to="signup" class="nav-link" >SignUp</Link>
              </li>
              <li class="nav-item">
                <Link to="counsellorregister" class="nav-link" >Register</Link>
              </li>



            </ul>

          </div>

        </div>
      </nav>
      <h1 className='heading'>Welcome to MindMatter</h1>
    </div>
      {/* <img className='image' src={ab}></img> */}

      <Routes>
       
        <Route path="login" element={<LoginComp />} />
        <Route path="admin_home" element={<AdminHome />} />
        <Route path="patient_home" element={<PatientHome />} />
        <Route path="Counsellor_home" element={<CounsellorHome />} />
        <Route path="counsellorregister" element={<CounsellorRegister />} />
        <Route path="/logout" element={<LogOutComp />} />

      </Routes>

    </div>
  );
}

export default App;

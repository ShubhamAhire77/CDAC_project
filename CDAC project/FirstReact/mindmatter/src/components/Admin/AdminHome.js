import { Link, Routes, Route } from 'react-router-dom';


export default function AdminHome()
{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Admin</a>
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
                <Link to="/" class="nav-link active" aria-current="page" >Approve</Link>
              </li>
              <li class="nav-item">
                <Link to="counsellorlist" class="nav-link" >Counsellor list</Link>
              </li>
              <li class="nav-item">
                <Link to="patientlist" class="nav-link" >Patient List</Link>
              </li>
              <li class="nav-item">
                <Link to="/logout" class="nav-link" >LogOut</Link>
              </li>



            </ul>

          </div>

        </div>
      </nav>
      
      


        <div>

           <h1 className="dashboard">Admin Dashboard</h1> 
           {/* <Routes>
        <Route path="login" element={<LoginComp />} />
        <Route path="admin_home" element={<AdminHome />} />
        <Route path="patient_home" element={<PatientHome />} />
              </Routes>
             */}
        </div>

        </div>
    )
}
import { Link, Routes, Route } from "react-router-dom";

export default function CounsellorHome() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Counsellor
          </a>
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
                <Link to="appointments" class="nav-link active" aria-current="page">
                  Appointments
                </Link>
                {/* make component for appointments */}
              </li>
              <li class="nav-item">
                <Link to="history" class="nav-link">
                  History
                </Link>
                {/* make component for history */}
              </li>
              <li class="nav-item">
                <Link to="updateprofile" class="nav-link">
                  Update Profile
                </Link>
                {/* make component for update */}
              </li>
              <li class="nav-item">
                <Link to="/logout" class="nav-link">
                  LogOut
                </Link>
                {/* logout is same for all entities */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <h1 className="dashboard">Counsellor Dashboard</h1>
        {/* <Routes>
        <Route path="login" element={<LoginComp />} />
        <Route path="admin_home" element={<AdminHome />} />
        <Route path="patient_home" element={<PatientHome />} />
              </Routes>
             */}
      </div>
    </div>
  );
}

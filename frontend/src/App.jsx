import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./Components/Header";
import AdminHeader from "./Components/AdminHeader";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Upload from "./Pages/Upload";
import Notes from "./Pages/Notes";
import MyNotes from "./Pages/MyNotes";
import ForgotPass from "./Pages/ForgotPass";
import Otp from "./Pages/Otp";
import NewPassword from "./Pages/NewPassword";

//Admin ko Pages
import Admin from "./Pages/Admin";
import AdminNotes from "./Pages/AdminNotes";
import AdminUsers from "./Pages/AdminUsers";

function AppContent() {
  const location = useLocation();

  // curent page admin or not
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-100">

      {/*Show different headerss*/}
      {isAdminPage?<AdminHeader />:<Header />}

      <main className="pt-20 px-6">
        <Routes>
          {/*User Routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/newpassword" element={<NewPassword />} />

          {/*Admin Routes*/}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/notes" element={<AdminNotes />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </main>

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
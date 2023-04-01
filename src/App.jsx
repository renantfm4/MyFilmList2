import Login from "./pages/Login.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./components/Auth.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import Homew from "./Homew.jsx";
import Movie from "./pages/Movie.jsx";
import Search from "./pages/Search.jsx";
import Account from "./pages/Account.jsx";

export default function App(){

  return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='home' element={<Homew/>}/>
          <Route path="movie/:id" element={< Movie />} />
          <Route path="search" element={<Search/>} />
          <Route path="account/" element={<Account />} />
        </Routes>
      </AuthProvider>
    </Router>
    
    
  )
}


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch, BsFillPersonFill} from "react-icons/bs";
import './Navbar.css';

function NavBar() {

    const[search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    };

  return (
    <nav className="navBar">      
        <h1 className="logo">
            <Link to="/">MyFilmList</Link></h1>  
            <form className="Form" onSubmit={handleSubmit}>
                <input className="input"type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value) } 
                value={search}
                />
                <button className="lupa"type="submit"><BsSearch /></button>
            </form>
            <BsFillPersonFill className="account" />
              
    </nav>

  )
}

export default NavBar
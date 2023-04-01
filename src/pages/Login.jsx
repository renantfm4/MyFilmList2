import './Login.css';
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/useAuth';



export default function Login() {

  const[email, setEmail] = useState("");
  const[password,setPassword] = useState("");
  const {Logar} = useAuth();
  const navigate = useNavigate();


  function Logando(r){
    r.preventDefault();

    const login = Logar(email,password);
    if(login){
    return navigate('/home');
  }
  return alert('Login não identificado');
  }

  const goToRegisterPage = () => {
    navigate('/register')
  }
  return (
    <main className='centralize'>
      <form onSubmit={Logando}>
        <div className='style'>
        <h1>Login</h1>
        </div>
        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder='Senha' onChange={e => setPassword(e.target.value)}/>
        <button type="submit" className='entrar'>Entrar</button>
        <button type="button" className='cadastro' onClick={goToRegisterPage}>Cadastre-se</button>
      </form>
    </main>


  );
}

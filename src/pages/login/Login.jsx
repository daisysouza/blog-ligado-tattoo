import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginform'>
            <label>E-mail</label>
            <input type="text" className='loginInput' placeholder='Seu e-mail' />
            <label>Senha</label>
            <input type="senha" className='loginInput' placeholder='Sua senha' />
        <button className='loginButton'>Entrar</button>
        </form>
        <button className='loginRegisterButton'>Cadastrar</button>
      
      
    </div>
  );
}

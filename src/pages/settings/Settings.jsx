import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css"

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
                <samp className='settingsUpdateTitle'>Atualizar sua conta</samp>
                <samp className='settingsDeleteTitle'>Deletar sua conta</samp>
            </div>
              <form className='settingsForm'>
              <label>Sua foto de Perfil</label>
              <div className='settingsProfilePic'>
                <img src="./images/perfil.jpg" alt="foto" />

                <label htmlFor='fileInput'>
                <i className='settingsProfilePicIcon fa-regular fa-circle-user'></i>
                </label>
                <input type='file' id='fileInput' style={{display:"none"}}/>           
                </div>
                <label>Usuário</label>
                <input type="text" placeholder='seu nome' />
                <label>E-mail</label>
                <input type="email" placeholder='email@email.com' />
                <label>Senha</label>
                <input type="password" />
                <button className='settingsSubmit'>Enviar</button>
            </form>
          </div>
        <Sidebar/>
      
    </div>
  )
}

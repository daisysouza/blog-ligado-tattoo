import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-youtube"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
     </div>
      <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">SOBRE NÓS</li>
        <li className="topListItem">CONTATO</li>
        <li className="topListItem">ESCREVER</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
    </div>
    <div className="topRight">
      <img 
        className="topImg"
         src="./images/p-logo-ligado-tattoo.jpg" alt='logo-ligado' 
      />
     
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    
    </div>

  </div>        
    
  )
}

//colocar no index.html o fontawesome-cdnjs mais novo e depois importar os icones do fontawesome
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
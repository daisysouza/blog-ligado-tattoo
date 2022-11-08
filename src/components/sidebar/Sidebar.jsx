import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>SOBRE NÓS</span>
            <img src='./images/estampa-logo.jpg' alt='ligado-tattoo' />
            <p>
                
            <b>MANUTENÇÃO EM MÁQUINAS DE TATUAGEM: </b>Manutenção de precisão, cuidado, tecnologia e confiança. Conserto de maquinas de tatuagem rotativas, bobinas e pneumáticas: manutenção mecânica e eletrônica de precisão. Tunning, regulagem, usinagem de peças, restauração, lubrificação, limpeza, pintura e anodização.
Venda de máquinas novas e usadas. Confecção de cabos sob medida em vários tamanhos e modelos. 

            </p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIAS</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Bobina</li>
                <li className="sidebarListItem">Rotativa</li>
                <li className="sidebarListItem">Pen</li>
                <li className="sidebarListItem">Fontes</li>                  
            </ul>
          </div>
          <div className="sidebarItem">
                <span className='sidebarTitle'>SIGA A LIGADO TATTOO!</span>
                  <div className="sidebarSocial">
                    <i  className="SidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="SidebarIcon fa-brands fa-square-youtube"></i>
                    <i className="SidebarIcon fa-brands fa-square-instagram"></i>
                  </div>
            </div>

    </div>
  )
}

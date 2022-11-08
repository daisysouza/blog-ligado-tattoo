import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header' >
        <div className="headerTitles">
            <span className='headerTitlesLg'>Blog Ligado Tattoo</span>
            <span className='headerTitlesSm'>Nosso canal dedicado à manutenção de máquinas de tatuagem!</span>
        </div>
        <img className='headerImg' src="./images/tatuando.jpg" alt='' />
    </div>
  )
}

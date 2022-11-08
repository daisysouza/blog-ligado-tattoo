import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='./images/pexels-adrian-boustead-955938.jpg' alt='post' />

    <div className='postInfo'>
        <div className="postCats">
            <span className='postCats'>Bobina</span>
            <span className='postCats'>Rotativa</span>
        </div>
        <span className='postTitle'>
            Manutenção em máquinas de tatuagem.
        </span>
        <hr/>
        <span className='postDate'>1 hora atrás</span>

    </div>
    <p className='postDesc'>
        O que é manutenção preventiva? 🧐 Manutenção preventiva é o ato de intervir, de forma antecipada, procurando defeitos e evitando possíveis panes do equipamento.
        Manutenção preventiva é o ato de intervir, de forma antecipada, procurando defeitos e evitando possíveis panes do equipamento
        Manutenção preventiva é o ato de intervir, de forma antecipada, procurando defeitos e evitando possíveis panes do equipamento
        Manutenção preventiva é o ato de intervir, de forma antecipada, procurando defeitos e evitando possíveis panes do equipamento
        Manutenção preventiva é o ato de intervir, de forma antecipada, procurando defeitos e evitando possíveis panes do equipamento
    </p>
    </div>
  )
}

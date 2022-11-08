import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
      <img className='writeImage' src='./images/pecas.jpg' alt='peças' />
    <form className='writeForm'>
      <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
          <i class="fa-solid fa-circle-plus"></i>
          </label>
          <input type='file' id='fileInput' style={{display:'none'}} />
          <input type='text' placeholder='Title' className='writeImput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Escrever post' type="text" className='writeImput writeText'>
            
          </textarea>
        </div>
        <button className="writeSubmit">POSTAR</button>
      </form>
    </div>
    
  );
}

import React from 'react';
import './singlepost.css'


export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img src='./images/IMG_20211123_164110.jpg' alt='post' className='singlePostImg' /> 
          <h1 className='singlePostTitle'>Manutenção tattoo pen: troca de motor mabuchi por swiss.
          <div className='singlePostEdit'>
          <i className='singlePostIcon fas fa-user-edit'></i>
          <i className='singlePostIcon fa-solid fa-trash'></i>
       </div> 
      </h1>
      <div className="SinglePostInfo">
        <span className='singlePostAutor'>Autor: Emmanuel Humberto</span>
        <span className='singlePostData'>1 hora atrás</span>
      </div>
      <p className='singlePostDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dignissimos qui aliquam, nobis similique illum id aut quod numquam neque ea! 
        Ipsum maxime officia exercitationem repudiandae dicta at explicabo vel quaerat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dignissimos qui aliquam, nobis similique illum id aut quod numquam neque ea! 
        Ipsum maxime officia exercitationem repudiandae dicta at explicabo vel quaerat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dignissimos qui aliquam, nobis similique illum id aut quod numquam neque ea! 
        Ipsum maxime officia exercitationem repudiandae dicta at explicabo vel quaerat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dignissimos qui aliquam, nobis similique illum id aut quod numquam neque ea! 
        Ipsum maxime officia exercitationem repudiandae dicta at explicabo vel quaerat.
      </p>
     </div>        
    </div>
    
    
  );
}

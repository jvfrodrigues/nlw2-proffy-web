import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/68035365?s=460&v=4" alt="Diego Fernandes" />
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Texto engraçado do cara que fez as telas
    <br /><br />
    KKKKKKKKKKK
  </p>
      <footer>
        <p>
          Preco/hora
      <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
      Entrar em contato
    </button>
      </footer>
    </article>
  )
}

export default TeacherItem
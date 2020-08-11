import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1291307893002833922/612uzHNr_400x400.jpg"
          alt="Leonardo Jaques"
        />
        <div>
          <strong>Leonardo Jaques</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
        <br />
        <br />
        similique error illum excepturi, aliquam tenetur ipsum harum ea repellat
        quasi nesciunt possimus ad totam perspiciatis quisquam, fuga blanditiis
        facere?
      </p>

      <footer>
        <p>
          Preco/hora
          <strong>$80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

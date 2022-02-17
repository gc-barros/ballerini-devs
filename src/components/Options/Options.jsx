import React from "react";
import './style.css'
import { MdPersonAddAlt1 } from 'react-icons/md'

function Options({ handleModal }) {

  return (
    <div className="options-container">
      <div className="options">
        <input
          type="text"
          placeholder="Buscar"
          className="input options__buscar"
        />
        <button className="button options__button" onClick={() => handleModal()}>
          <MdPersonAddAlt1/> Adicionar dev
        </button>
      </div>
    </div>
  );
}

export default Options;
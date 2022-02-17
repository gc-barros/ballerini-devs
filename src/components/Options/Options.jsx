import React from "react";
import './style.css'
import { MdPersonAddAlt1 } from 'react-icons/md'

function Options() {


  return (
    <div className="options-container">
      <div className="options">
        <input
          type="text"
          placeholder="Buscar"
          className="input options__buscar"
        />
        <button className="button options__button">
          <MdPersonAddAlt1/> Adicionar novo dev
        </button>
      </div>
    </div>
  );
}

export default Options;
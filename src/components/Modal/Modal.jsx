import React, { useState } from "react";
import "./style.css";
import { RiCloseFill } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";

function Modal({ handleModal, adicionarDev }) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [gituser, setGituser] = useState('');
  const [linkedin, setLinkedin] = useState('');

  return (
    <div className="overlay">
      <form className="modal">
        <h2>
          <MdPersonAddAlt1 />
          Novo dev
        </h2>

        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          required
          placeholder="Gabriel Barros"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <label htmlFor="cargo">Cargo:</label>
        <input
          id="cargo"
          type="text"
          placeholder="Desenvolvedor front-end"
          value={cargo}
          onChange={(e) => {
            setCargo(e.target.value);
          }}
        />

        <label htmlFor="github">GitHub username:</label>
        <input
          id="github"
          type="text"
          placeholder="gc-barros"
          value={gituser}
          onChange={(e) => {
            setGituser(e.target.value);
          }}
        />

        <label htmlFor="linkedin">Linkedin:</label>
        <input
          id="linkedin"
          type="text"
          placeholder="https://www.linkedin.com/in/gabriel-barros-526ab7127/"
          value={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
        />

        <button
          className="button"
          onClick={(event) => {
            event.preventDefault();
            adicionarDev(nome, cargo, gituser, linkedin);
            handleModal();
          }}
        >
          Adicionar
        </button>

        <button
          className="close-button"
          onClick={(event) => {
            event.preventDefault();
            handleModal();
          }}
        >
          <RiCloseFill />
        </button>
      </form>
    </div>
  );
}

export default Modal;

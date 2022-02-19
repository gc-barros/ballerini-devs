import React, { useState } from "react";
import "./style.css";
import { RiCloseFill } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa"

function Modal({ handleModal, actionDev, tipo, editDev }) {

  const [nome, setNome] = useState(editDev.nome);
  const [cargo, setCargo] = useState(editDev.cargo);
  const [gituser, setGituser] = useState(editDev.gituser);
  const [linkedin, setLinkedin] = useState(editDev.linkedin);

  return (
    <div className="overlay">
      <form className="modal">
        <h2>
          {tipo === "Adicionar" ? <MdPersonAddAlt1 /> : <FaUserEdit />}
          {tipo} dev
        </h2>

        <label htmlFor="nome">Nome*</label>
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

        <label htmlFor="cargo">Cargo*</label>
        <input
          id="cargo"
          type="text"
          placeholder="Desenvolvedor front-end"
          value={cargo}
          onChange={(e) => {
            setCargo(e.target.value);
          }}
        />

        <label htmlFor="github">GitHub username*</label>
        <input
          disabled={tipo === "Editar"}
          id="github"
          type="text"
          placeholder="gc-barros"
          value={gituser}
          onChange={(e) => {
            setGituser(e.target.value);
          }}
        />

        <label htmlFor="linkedin">Linkedin</label>
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
            if (nome !== "" && cargo !== "" && gituser !== "") {
              actionDev(nome, cargo, gituser, linkedin);
              handleModal();
            } else {
              alert("Dados inválidos!");
            }
          }}
        >
          Salvar alterações
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

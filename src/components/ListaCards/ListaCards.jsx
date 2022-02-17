import React, { useState } from "react";
import "./style.css";
import GitHubButton from "../../assets/img/icons/icone github.png";
import LinkedinButton from "../../assets/img/icons/icone linkedin.png";
import { MdEdit, MdDelete } from 'react-icons/md';

function ListaCards() {
  const [devsData, setDevsData] = useState([
    {
      nome: "Gabriel Barros",
      avatar: "https://github.com/gc-barros.png",
      cargo: "Desenvolvedor front-end",
      github: "https://github.com/gc-barros",
      linkedin: "https://www.linkedin.com/in/gabriel-barros-526ab7127/",
    },
    {
      nome: "Rafaella Ballerini",
      avatar: "https://github.com/rafaballerini.png",
      cargo: "Instrutora front-end",
      github: "https://github.com/rafaballerini",
      linkedin: "https://www.linkedin.com/in/rafaellaballerini/",
    },
  ]);

  return (
    <ul className="listaDevs">
      {devsData.map((dev, key) => (
        <li className="listaDevs__card" key={key}>
          <img
            src={dev.avatar}
            alt={`Foto de ${dev.nome}`}
            className="card__avatar"
          />
          <span className="card__nome">{dev.nome}</span>
          <span className="card__cargo">{dev.cargo}</span>
          <div className="card__social">
            <a
              href={dev.github}
              title="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubButton} alt="GitHub" />
            </a>
            <a
              href={dev.linkedin}
              title="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinButton} alt="Linkedin" />
            </a>
            <button className="button card__button">Saiba mais</button>
          </div>

          <div className="card__actions">
            <button className="action__edit">
              <MdEdit />
            </button>
            <button className="action__delete">
              <MdDelete />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaCards;

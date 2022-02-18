import React, { useEffect, useState } from "react";
import "./style.css";
import GitHubButton from "../../assets/img/icons/icone github.png";
import LinkedinButton from "../../assets/img/icons/icone linkedin.png";
import { MdEdit, MdDelete } from "react-icons/md";

function ListaCards({ devsData, deletarDev }) {
  const [noDevs, setNoDevs] = useState(false);

  useEffect(() => {
    if (devsData.length === 0) {
      setNoDevs(true);
    } else {
      setNoDevs(false)
    }
  }, [devsData])

  return (
    <ul className="listaDevs">
        {noDevs && "Ainda não há devs cadastrados."}
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
              <button
                className="action__delete"
                onClick={() => {
                  deletarDev(key);
                }}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ListaCards;

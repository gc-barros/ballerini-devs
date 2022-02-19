import React, { useState } from "react";
import "./style.css";
import GitHubButton from "../../assets/img/icons/icone github.png";
import LinkedinButton from "../../assets/img/icons/icone linkedin.png";
import { MdEdit, MdDelete } from "react-icons/md";
import Lottie from "react-lottie";
import monkey from "../../assets/img/monkey.json";

function Monkey() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: monkey,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="listaDevs__monkey">
      <span>Tudo calmo por aqui... 😴</span>
      <h2>Ainda não há devs cadastrados.</h2>
      <Lottie options={defaultOptions} />
    </div>
  );
}

function ListaCards({ devsData, deletarDev, noDevs, handleModalEdit, setUserInfo, handleShowInfo }) {
  
  return ( 
    <ul className="listaDevs">
      {noDevs && <Monkey />}
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
            <button
              className="button card__button"
              onClick={() => {
                setUserInfo(dev.gituser);
                handleShowInfo();
              }}
            >
              Saiba mais
            </button>
          </div>

          <div className="card__actions">
            <button
              className="action__edit"
              onClick={() => {
                handleModalEdit(key);
              }}
            >
              <MdEdit />
            </button>
            <button
              className="action__delete"
              onClick={() => {
                deletarDev(dev.gituser);
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

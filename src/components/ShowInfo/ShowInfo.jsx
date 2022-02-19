import React, { useState, useEffect } from "react";
import "./style.css";
import api from "../../services/api";
import { RiCloseFill } from "react-icons/ri";
import {
  RiUserShared2Fill,
  RiUserReceivedFill,
  RiGitRepositoryFill,
} from "react-icons/ri";

function ShowInfo({ gituser, handleShowInfo }) {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get(`/users/${gituser}`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="overlay">
      <div className="showInfo">
        <button className="close-button" onClick={() => handleShowInfo()}>
          <RiCloseFill />
        </button>

        <div className="showInfo__dados">
          <div className="showInfo__avatar">
            <img src={user?.avatar_url} alt="" />
          </div>

          <p className="showInfo__infos">
            <p className="showInfo__name">{user?.name}</p>
            <p className="showInfo__login">{user?.login}</p>
          </p>

          <h2 className="showInfo__follow">
            <p className="showInfo__infos">
              <RiUserReceivedFill />
              <span>{user?.followers}</span> seguidores
            </p>
            <p className="showInfo__infos">
              <RiUserShared2Fill />
              <span>{user?.following}</span> seguindo
            </p>
            <p className="showInfo__infos">
              <RiGitRepositoryFill />
              <span>{user?.public_repos}</span> repositórios
            </p>
          </h2>

          <button className="button" onClick={() => {
            window.open(user?.html_url, "_blank");
          }}>Visitar perfil</button>
        </div>
      </div>
    </div>
  );
}

export default ShowInfo;

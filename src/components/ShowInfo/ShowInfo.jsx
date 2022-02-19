import React, { useState, useEffect } from "react";
import './style.css'
import api from "../../services/api";

function ShowInfo({gituser, handleShowInfo}) {

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
        <button onClick={() => handleShowInfo()}>Fechar</button>
        <h1>Informações do GitHub: {user?.login}</h1>
        <h1>
          Avatar: <img src={user?.avatar_url} alt="" />
        </h1>
        <h2>Nome: {user?.name}</h2>
        <h2>Bio: {user?.bio}</h2>
        <h2>Seguidores: {user?.followers}</h2>
        <h2>Seguindo: {user?.following}</h2>
        <h2>Repositórios: {user?.public_repos}</h2>
        <h2>Location: {user?.location}</h2>
      </div>
    </div>
  );
}

export default ShowInfo;
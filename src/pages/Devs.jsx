import React, { useState } from "react";
import ListaCards from "../components/ListaCards";
import Modal from "../components/Modal/Modal";
import Options from "../components/Options"

function Devs() {

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

  const [showModalAdd, setShowModalAdd] = useState(false);

  function handleModalAdd() {
    if (showModalAdd) {
      setShowModalAdd(false);
    } else {
      setShowModalAdd(true);
    }
  }

  function adicionarDev(nome, cargo, gituser, linkedin) {
    const novoDev = {
      nome: nome,
      avatar: `https://github.com/${gituser}.png`,
      cargo: cargo,
      github: `https://github.com/${gituser}`,
      linkedin: linkedin,
    };

    const novoEstado = [...devsData, novoDev];
    setDevsData(novoEstado);
  }

  function deletarDev(key) {
    const novoEstado = devsData.filter((dev, indice) => indice !== key);
    setDevsData(novoEstado);
  }

  return (
    <>
      <Options handleModal={handleModalAdd} />
      {showModalAdd && <Modal handleModal={handleModalAdd} adicionarDev={adicionarDev}/>}
      <ListaCards devsData={devsData} deletarDev={deletarDev}/>
    </>
  );
}

export default Devs;
import React, { useState, useEffect } from "react";
import ListaCards from "../components/ListaCards";
import Modal from "../components/Modal/Modal";
import Options from "../components/Options";
import { deleteItem, getSavedItems, saveItem, editItem } from "../services/storeDevs";

function Devs() {
  const [devsData, setDevsData] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [noDevs, setNoDevs] = useState(false);

  const [editDev, setEditDev] = useState({
    nome: "",
    cargo: "",
    gituser: "",
    linkedin: "",
  });

  /*
  const myFavoriteDevs = [
    {
      nome: "Gabriel Barros",
      cargo: "Desenvolvedor front-end",
      gituser: "gc-barros",
      linkedin: "https://www.linkedin.com/in/gabriel-barros-526ab7127/",
    },
    {
      nome: "Rafaella Ballerini",
      cargo: "Instrutora front-end",
      gituser: "rafaballerini",
      linkedin: "https://www.linkedin.com/in/rafaellaballerini/",
    },
  ];
  */

  function handleModalAdd() {
    if (showModalAdd) {
      setShowModalAdd(false);
    } else {
      setShowModalAdd(true);
    }
  }

  function handleModalEdit(key) {
    if (showModalEdit) {
      setShowModalEdit(false);
      setEditDev({
        nome: "",
        cargo: "",
        gituser: "",
        linkedin: "",
      });
    } else {
      setShowModalEdit(true);
      setEditDev(devsData[key]);
    }
  }

  function adicionarDev(nome, cargo, gituser, linkedin) {
    const novoDev = {
      nome: nome,
      avatar: `https://github.com/${gituser}.png`,
      cargo: cargo,
      github: `https://github.com/${gituser}`,
      linkedin: linkedin,
      gituser: gituser,
    };

    // Se já tiver um dev salvo, eu não vou deixar duplicar
    const hasItem = devsData.some((item) => item.gituser === novoDev.gituser);

    if (hasItem) {
      alert("Este dev já está cadastrado!");
      return;
    }

    if (noDevs) {
      setNoDevs(false);
    }

    const novoEstado = [...devsData, novoDev];
    setDevsData(novoEstado);

    saveItem(novoDev);
  }

  function editarDev(nome, cargo, gituser, linkedin) {
    let indice = devsData.findIndex((dev) => (dev.gituser === gituser));
    
    const newDataDev = {
      nome: nome,
      avatar: `https://github.com/${gituser}.png`,
      cargo: cargo,
      github: `https://github.com/${gituser}`,
      linkedin: linkedin,
      gituser: gituser,
    };

    devsData.splice(indice, 1, newDataDev);
    editItem(newDataDev, indice);

    console.log("Editar dev ", indice);
  }

  async function deletarDev(key) {
    const result = await deleteItem(devsData, key);

    if (result.length === 0) {
      // Não há mais devs
      setNoDevs(true);
    }

    setDevsData(result);
  }

  useEffect(() => {
    async function getItems() {
      const result = await getSavedItems();

      if (result.length === 0) {
        // Nossa lista está vazia...
        setNoDevs(true);
      }

      setDevsData(result);
    }

    getItems();
  }, []);

  return (
    <>
      <Options handleModal={handleModalAdd} devsData={devsData} setDevsData={setDevsData} />
      {showModalAdd && (
        <Modal
          handleModal={handleModalAdd}
          actionDev={adicionarDev}
          editDev={editDev}
          tipo={"Adicionar"}
        />
      )}
      {showModalEdit && (
        <Modal
          handleModal={handleModalEdit}
          actionDev={editarDev}
          editDev={editDev}
          tipo={"Editar"}
        />
      )}
      <ListaCards
        devsData={devsData}
        deletarDev={deletarDev}
        handleModalEdit={handleModalEdit}
        noDevs={noDevs}
      />
    </>
  );
}

export default Devs;

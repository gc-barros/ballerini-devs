import React, { useState, useEffect } from "react";
import ListaCards from "../components/ListaCards";
import Modal from "../components/Modal/Modal";
import Options from "../components/Options";
import ShowInfo from "../components/ShowInfo";
import { deleteItem, getSavedItems, saveItem, editItem } from "../services/storeDevs";

function Devs() {
  const [devsData, setDevsData] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const [noDevs, setNoDevs] = useState(false);
  const [userInfo, setUserInfo] = useState();

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

  function handleShowInfo() {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
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

  async function editarDev(nome, cargo, gituser, linkedin) {

    const storedDevs = await getSavedItems();
    
    let indice = storedDevs.findIndex((dev) => (dev.gituser === gituser));
    
    const newDataDev = {
      nome: nome,
      avatar: `https://github.com/${gituser}.png`,
      cargo: cargo,
      github: `https://github.com/${gituser}`,
      linkedin: linkedin,
      gituser: gituser,
    };

    await editItem(newDataDev, indice)
    .then(async () => {
      const storedDevsAtt = await getSavedItems();
      setDevsData(storedDevsAtt);
      }
    )
  }

  async function deletarDev(gituser) {
    const result = await deleteItem(gituser);

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
      {showInfo && (
        <ShowInfo gituser={userInfo} handleShowInfo={handleShowInfo} />
      )}
      <Options
        handleModal={handleModalAdd}
        devsData={devsData}
        setDevsData={setDevsData}
      />
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
        setUserInfo={setUserInfo}
        handleShowInfo={handleShowInfo}
      />
    </>
  );
}

export default Devs;

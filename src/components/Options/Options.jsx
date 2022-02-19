import React, { useEffect, useMemo, useState } from "react";
import './style.css'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { getSavedItems } from "../../services/storeDevs";

function Options({ handleModal, devsData, setDevsData }) {

  const [busca, setBusca] = useState('')

  const resultadosFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return devsData.filter((dev) => (dev.nome.toLowerCase().includes(lowerBusca)))
  }, [busca]) 

  useEffect(() => {
    setDevsData(resultadosFiltrados)

    async function getItems() {
      const result = await getSavedItems();
      setDevsData(result);
    }

    if (busca === "") {
      getItems();
    }

  }, [resultadosFiltrados])

  return (
    <div className="options-container">
      <div className="options">
        <input
          type="text"
          placeholder="Buscar"
          className="input options__buscar"
          onInput={(e) => {
            setBusca(e.target.value);
          }}
        />
        <button className="button options__button" onClick={() => handleModal()}>
          <MdPersonAddAlt1/> Adicionar dev
        </button>
      </div>
    </div>
  );
}

export default Options;
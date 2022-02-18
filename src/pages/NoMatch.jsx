import React from "react";
import Lottie from "react-lottie";
import notfound from "../assets/img/notfound.json";
import { Link } from 'react-router-dom';
import '../assets/css/nomatch.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: notfound,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function NoMatch() {
  return (
    <div className="nomatch">
      <div className="nomatch__ilustracao">
        <Lottie options={defaultOptions} />
      </div>
      <div className="nomatch__action">
        <h1>Oops... Página não encontrada!</h1>
        <Link to="/" className="button">Voltar ao início</Link>
      </div>
    </div>
  );
}

export default NoMatch;
import React from "react";
import Lottie from "lottie-react";
import notfound from "../assets/img/notfound.json";
import { Link } from 'react-router-dom';
import '../assets/css/nomatch.css'

function NoMatch() {
  return (
    <div className="nomatch">
      <div className="nomatch__ilustracao">
        <Lottie animationData={notfound} loop={true} />
      </div>
      <div className="nomatch__action">
        <h1>Oops... Página não encontrada!</h1>
        <Link to="/" className="button">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

export default NoMatch;
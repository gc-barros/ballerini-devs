import React from "react";
import './style.css';
import logo from '../../assets/img/icons/Logo ballerini devs.svg';
import linkedinIcon from "../../assets/img/icons/linkedin.svg";
import facebookIcon from "../../assets/img/icons/facebook.svg";
import discordIcon from "../../assets/img/icons/discord.svg";

import { Link } from 'react-router-dom';

function Cabecalho() {

  return (
    <header className="cabecalho">
      <div className="cabecalho__social">
        <a
          href="https://www.linkedin.com/in/gabriel-barros-526ab7127/"
          title="LinkedIn"
          className="cabecalho__social--link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.facebook.com/"
          title="Facebook"
          className="cabecalho__social--link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://discord.gg/wagxzStdcR"
          title="Discord"
          className="cabecalho__social--link"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>

      <Link className="cabecalho__logo" to="/">
        <img
          src={logo}
          alt="Logo Ballerini Devs"
          className="cabecalho__logo--icone"
        />
        <span className="cabecalho__logo--texto">Ballerini Devs</span>
      </Link>
    </header>
  );
}

export default Cabecalho;
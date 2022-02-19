import React from 'react';
import '../assets/css/home.css'
import Lottie from 'lottie-react';
import programador from '../assets/img/lf30_editor_6kzkwdgu.json';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="principal">
      <div className="principal__content">
        <h1 className="principal__titulo">O maior banco de devs do Brasil</h1>
        <p className="principal__descricao">
          Nao importa se você é front ou back-end, fazer networking é muito
          importante. Faça parte da maior comunidade de desenvolvedores
          brasileiros.
        </p>
        <Link to="/devs">
          <button className="button principal__button">Entrar agora</button>
        </Link>
      </div>
      <div className="principal__ilustracao">
        <Lottie animationData={programador} loop={true} />
      </div>
      <div className="principal__blob"></div>
    </main>
  );
}

export default Home;
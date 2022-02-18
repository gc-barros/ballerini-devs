import React from 'react';
import '../assets/css/home.css'
import Lottie from 'react-lottie';
import programador from '../assets/img/lf30_editor_6kzkwdgu.json';
import { Link } from 'react-router-dom';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: programador,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home() {
  return (
    <main className="principal">
      <div className='principal__content'>
        <h1 className="principal__titulo">O maior banco de devs do Brasil</h1>
        <p className='principal__descricao'>
          Nao importa se você é front ou back-end, fazer networking é muito importante.
          Faça parte da maior comunidade de desenvolvedores brasileiros.
        </p>
        <Link to="/devs"><button className='button principal__button'>Entrar agora</button></Link>
      </div>
      <div className="principal__ilustracao">
        <Lottie options={defaultOptions}/>
      </div>
      <div className="principal__blob"></div>
    </main>
  );
}

export default Home;
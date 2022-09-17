import './style.css';

import triangulosLight from '../../assets/icons/triangulos-branco.svg'
import githubLight from '../../assets/icons/github-light.svg'
import twitterLight from '../../assets/icons/twitter-light.svg'
import linkedinLight from '../../assets/icons/linkedin-light.svg'

import Passador from '../Passador';

function Footer({ pageState, handlePageState, projectState }) {
  return (
    <div>

      {projectState !== null && 
      <Passador
      />}

      {pageState !== 'contato' &&
        <div id="home-card3">
          <h1 id="titulo-card3" className='ibarraReal700 size40 height42 black1 left' >Interessado em fazer projetos comigo?</h1>

          <button onClick={() => handlePageState('contato')} id="botao3" className='publicSans400 height14 size12 letterSpacing2 ' > CONTATO </button>
        </div>}


      <footer id="footer-home">

        <div id="container-footer-home">

          <img src={triangulosLight} alt="triangulos-branco" id="triangulos-branco"></img>
          <button id="home-footer" onClick={() => handlePageState('home')}
            className='publicSans400 height14 size12 letterSpacing2 '
            style={{ color: pageState === 'home' ? 'rgba(255, 255, 255, 0.363) ' : 'white' }}>
            HOME</button>
          <button onClick={() => handlePageState('portfolio')}
            className='publicSans400 height14 size12 letterSpacing2'
            style={{ color: pageState === 'portfolio' ? 'rgba(255, 255, 255, 0.363) ' : 'white' }}
          >PORTFÓLIO</button>
          <button onClick={() => handlePageState('contato')}
            className='publicSans400 height14 size12 letterSpacing2'
            style={{ color: pageState === 'contato' ? 'rgba(255, 255, 255, 0.363) ' : 'white' }}>CONTATO</button>

          <img src={githubLight} alt="github-light" id="github-light"></img>
          <img src={twitterLight} alt="twitter-light" id="twitter-light"></img>
          <img src={linkedinLight} alt="linkedin-light"></img>

        </div>
      </footer>
    </div>
  );
}

export default Footer;

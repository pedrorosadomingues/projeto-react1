import './style.css';

import triangulosLight from '../assets/icons/triangulos-branco.svg'
import githubLight from '../assets/icons/github-light.svg'
import twitterLight from '../assets/icons/twitter-light.svg'
import linkedinLight from '../assets/icons/linkedin-light.svg'

function Footer({ page, handlePageState }) {
  return (
    <div>
       

{page !== 'contato' && 
<div id="home-card3">
<h1 id="titulo-card3">Interessado em fazer projetos comigo?</h1>

<button onClick={() => handlePageState('contato')} id="botao3"> CONTATO </button>
</div>}


      <footer id="footer-home">

        <div id="container-footer-home">

          <img src={triangulosLight} alt="triangulos-branco" id="triangulos-branco"></img>
          <button id="home-footer" onClick={(e) => handlePageState(e.target.name)}
            name='home'
            style={{ color: page === 'home' ? 'rgba(255, 255, 255, 0.363) ' : 'white' }}
          >HOME</button>
          <button onClick={() => handlePageState('portfolio')}
            
            style={{ color: page === 'portfolio' ? 'rgba(255, 255, 255, 0.363) ' : 'white' }} >PORTFÓLIO</button>
          <button onClick={() => handlePageState('contato')}
            
            style={{ color: page === 'contato' ? 'rgba(255, 255, 255, 0.363) ' : 'white' }}>CONTATO</button>

          <img src={githubLight} alt="github-light" id="github-light"></img>
          <img src={twitterLight} alt="twitter-light" id="twitter-light"></img>
          <img src={linkedinLight} alt="linkedin-light"></img>

        </div>
      </footer>
    </div>
  );
}

export default Footer;

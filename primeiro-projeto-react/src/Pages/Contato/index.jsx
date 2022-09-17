
import './style.css';

import githubDark from '../../assets/icons/github-dark.svg';
import linkedinDark from '../../assets/icons/linkedin-dark.svg';
import twitterDark from '../../assets/icons/twitter-dark.svg';

function Contato() {
  return (
    <div >
      <div id='texto-contato'>
        <h1 className='ibarraReal700 height42 size40 black1'>Entre em Contato</h1>
        <div>
          <p className='publicSans400 height30 size16 black2'>Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar. Atualmente estou procurando por um cargo e aberto para várias oportunidades. Minha preferência é uma oportunidade em uma empresa Britânica. Mas também estou feliz em escutar sobre oportunidades remotas. Sou uma pessoa trabalhadora e positiva que sempre fará as tasks com um senso de propósito e atenção aos detalhes. Fique livre para checar meu perfis abaixo e entrar em contato utilizando o formulário.</p>
          <img src={githubDark} alt="github-dark" />
          <img src={twitterDark} alt="twitter-dark" id='twitter-dark' />
          <img src={linkedinDark} alt="linkedin-dark" />
        
        </div>
      </div>

      <div id='info-contato'>
        <h1 className='ibarraReal700 height42 size40 black1'>Contato</h1>
        <div id= 'inputs-container'>
          <span className='publicSans700 height30 size13 black1'>Nome</span>
          <div></div>
          <span className='publicSans700 height30 size13 black1'>E-mail</span>
          <div></div>
          <span className='publicSans700 height30 size13 black1'>Mensagem</span>
          <div id='div-maior-contato'></div>
          <button className='publicSans400 height14 size12 white1'>ENVIAR</button>
        </div>
      </div>


    </div>
  );
}

export default Contato;

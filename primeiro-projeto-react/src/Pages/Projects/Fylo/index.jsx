import './style.css';

import imageOneManage from '../../../assets/portfolio/fylo/image-fylo-hero.jpg';
import imageTwoManage from '../../../assets/portfolio/fylo/image-fylo-preview-1.jpg';
import imageThreeManage from '../../../assets/portfolio/fylo/image-fylo-preview-2.jpg';




function Manage() {
  return (
    <div >
      <div id='main-container-manage'>
        <div>
          <img src={imageOneManage} alt="image1-manage" id='image-one-manage' />
        </div>
        <div id='container-textos'>
          <div id='container1-manage'>
            <h1 className='ibarraReal700 size40 height48 black1'
            >Fylo</h1>
            <p className='publicSans400 size16 height30 black2'
            >Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
            <p className='publicSans700 size16 height30 green1'
            >Interaction Design / Front End Development</p>
            <p className='publicSans700 size16 height30 green1'
            >HTML / CSS / JS</p>
            <button className='publicSans400 size12 height14 letterSpace2 black1'
            >VISITAR</button>
          </div>
          <div id='container2-manage'>
            <h1 className='ibarraReal400 size32 height42 black1'
            >Projeto</h1>
            <p className='publicSans400 size15 height30 black2'
            >Este projeto foi um desafio de front-end do Frontend Mentor.  É uma plataforma que te faz práticar construindo websites  a partir de um design e casos de usuário. Cada desafio contém designs mobile e desktop para ilustrar como o website seria em diferentes tamanhos de tela. Criar esses projetos me ajudou a refinar meu fluxo de trabalho e resolver problemas de código da vida real. Eu aprendi algo novo com cada projeto, me ajudando a melhorar e adaptar meu estilo.</p>

            <h1 className='ibarraReal400 size32 height42 black1'
            >Previews Estáticos</h1>

            <div>
              <img src={imageTwoManage} alt="img-two-manage" id='image-two-manage' />
              <img src={imageThreeManage} alt="img-three-manage" id='image-three-manage' />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Manage;

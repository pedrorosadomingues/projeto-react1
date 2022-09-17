import './style.css';

import imagemManage from '../../assets/portfolio/manage/image-portfolio-manage.jpg';
import imagemBookMark from '../../assets/portfolio/bookmark/image-portfolio-bookmark.jpg';
import imagemInsure from '../../assets/portfolio/insure/image-portfolio-insure.jpg';
import imagemFylo from '../../assets/portfolio/fylo/image-portfolio-fylo.jpg';


function Portfolio({ handleProjectState }) {
  return (

    
    <div >
      
      <div className='container-portfolio'>

        <img id="imagem-portfolio" src={imagemManage} alt="" />
        <div className='texto-portfolio'>
          <h1 className='ibarraReal700 height42 size40 black1'>Manage</h1>
          <p className='publicSans400 height30 size16 black2'>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
          <button onClick={() => handleProjectState('Manage')}
            className='publicSans400 height14 size12 letterSpace2 black1'
          >VER PROJETO
          </button>
        </div>
      </div>
      <div className='container-portfolio'>
        <div className='texto-portfolio'>
          <h1 className='ibarraReal700 height42 size40 black1'>Bookmark</h1>
          <p className='publicSans400 height30 size16 black2'>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
          <button onClick={() => handleProjectState('Bookmark')}
            className='publicSans400 height14 size12 letterSpace2 black1'>
            VER PROJETO
          </button>
        </div>
        <img id="imagem-portfolio" src={imagemBookMark} alt="" />

      </div>
      <div className='container-portfolio'>

        <img id="imagem-portfolio" src={imagemInsure} alt="" />
        <div className='texto-portfolio'>
          <h1 className='ibarraReal700 height42 size40 black1'>Insure</h1>
          <p className='publicSans400 height30 size16 black2'>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
          <button onClick={() => handleProjectState('Insure')}
            className='publicSans400 height14 size12 letterSpace2 black1'>
            VER PROJETO
          </button>
        </div>
      </div>
      <div className='container-portfolio' id='ultimo-container-portfolio'>
        <div className='texto-portfolio'>
          <h1 className='ibarraReal700 height42 size40 black1'>Fylo</h1>
          <p className='publicSans400 height30 size16 black2'>Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
          <button onClick={() => handleProjectState('Fylo')}
            className='publicSans400 height14 size12 letterSpace2 black1'>
            VER PROJETO
          </button>
        </div>
        <img id="imagem-portfolio" src={imagemFylo} alt="" />
      </div>
    </div>

  );

}


export default Portfolio;

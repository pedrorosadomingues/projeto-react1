
import './style.css';

import iconeTriangulos from '../../assets/icons/icone-triangulos.svg'

function Header({ pageState, handlePageState }) {
  return (
    <div>
      <header>

        <img src={iconeTriangulos} alt="triangulos" id='icone-triangulos'

        ></img>
        <div id="cabecalho">

          <button className='publicSans400 height14 size12 letterSpacing2 black1' 
            onClick={() => handlePageState('home')}
            style={{ color: pageState === 'home' ? '#5FB4A2 ' : '#000000' }}>
            HOME
          </button>

          <button className='publicSans400 height14 size12 letterSpacing2 black1' 
            onClick={() => handlePageState('portfolio')}
            style={{ color: pageState === 'portfolio' ? '#5FB4A2 ' : '#000000' }}>
            PORTFÓLIO
          </button>

          <button className='publicSans400 height14 size12 letterSpacing2 black1' 
            onClick={() => handlePageState('contato')}
            style={{ color: pageState === 'contato' ? '#5FB4A2 ' : '#000000' }}>
            CONTATO
          </button>
        </div>

      </header>
    </div>
  );
}

export default Header;

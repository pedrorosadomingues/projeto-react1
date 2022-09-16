
import './style.css';

import iconeTriangulos from '../assets/icons/icone-triangulos.svg'

function Header({ page, handlePageState }) {
  return (
    <div>
      <header>

        <img src={iconeTriangulos} alt="triangulos" id='icone-triangulos'

        ></img>
        <div id="cabecalho">

          <button
            onClick={() => handlePageState('home')}
            style={{ color: page === 'home' ? '#5FB4A2 ' : '#000000' }}>
            HOME
          </button>

          <button
            onClick={() => handlePageState('portfolio')}
            style={{ color: page === 'portfolio' ? '#5FB4A2 ' : '#000000' }}>
            PORTFÓLIO
          </button>

          <button
            onClick={() => handlePageState('contato')}
            style={{ color: page === 'contato' ? '#5FB4A2 ' : '#000000' }}>
            CONTATO
          </button>
        </div>

      </header>
    </div>
  );
}

export default Header;

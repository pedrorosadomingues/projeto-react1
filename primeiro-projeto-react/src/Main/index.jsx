import './style.css';

import Header from '../Header/index.jsx';
import Home from '../Home/index.jsx';
import Portfolio from '../Portfolio/index.jsx';
import Contato from '../Contato/index.jsx';
import Footer from '../Footer/index.jsx';
import { useState } from 'react';

function Main() {
  const [page, setPage] = useState('home');

  function handlePageState(pagina) {
    setPage(pagina);
  }

  return (
    <div>
      <Header
        handlePageState={handlePageState}
        page={page}
      />

      {page === 'home' && < Home
        handlePageState={handlePageState}
      />}
      {page === 'portfolio' && <Portfolio
      />}
      {page === 'contato' && <Contato
      />}

      <Footer
        handlePageState={handlePageState}
        page={page}
      />
    </div>
  );
}

export default Main;

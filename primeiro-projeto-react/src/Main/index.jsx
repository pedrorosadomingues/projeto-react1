import './style.css';
import './fontes.css';
import { useState } from 'react';
import UserContext from '../Context/UserContext';

import Header from '../Components/Header/index.jsx';
import Footer from '../Components/Footer/index.jsx';

import Home from '../Pages/Home/index.jsx';
import Portfolio from '../Pages/Portfolio/index.jsx';
import Contato from '../Pages/Contato/index.jsx';

import Manage from '../Pages/Projects/Manage/index.jsx';
import Bookmark from '../Pages/Projects/Bookmark/index.jsx';
import Insure from '../Pages/Projects/Insure/index.jsx';
import Fylo from '../Pages/Projects/Fylo/index.jsx';

function Main() {
  const [pageState, setPageState] = useState('home');
  const [projectState, setProjectState] = useState(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }
  function handleProjectState(project) {
    setProjectState(project);
    scrollToTop();
  }
  function handlePageState(pagina) {
    setPageState(pagina);
    setProjectState(null);
    scrollToTop();
  }

  return (
    <UserContext.Provider value={{ pageState, handlePageState, projectState, handleProjectState }}>
      <div>
        <Header
          handlePageState={handlePageState}
          pageState={pageState}
        />

        {pageState === 'home' && < Home
          handlePageState={handlePageState}
        />}
        {pageState === 'portfolio' && projectState === null && <Portfolio
          handleProjectState={handleProjectState}
        />}
        {pageState === 'contato' && <Contato
        />}

        {projectState === 'Manage' && <Manage
        />}
        {projectState === 'Bookmark' && <Bookmark
        />}
        {projectState === 'Insure' && <Insure
        />}
        {projectState === 'Fylo' && <Fylo
        />}

        <Footer
          handlePageState={handlePageState}
          pageState={pageState}
          projectState={projectState}
        />
      </div>
    </UserContext.Provider>
  );
}

export default Main;

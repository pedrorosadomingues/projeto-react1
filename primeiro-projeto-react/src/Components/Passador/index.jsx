
import './style.css';
import { useContext, useState } from 'react';

import UserContext from '../../Context/UserContext';

import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';


function Passador() {
  const [btnTextState, setBtnTextState] = useState({
    textoPreview: 'Fylo ',
    textoNext: 'Bookmark',
  });

  const { projectState, handleProjectState } = useContext(UserContext);

  const handleNextPage = (project) => {
    if (project === 'Manage') {
      handleProjectState('Bookmark');
      setBtnTextState({
        textoPreview: 'Manage',
        textoNext: 'Insure',
      })
    } else if (project === 'Bookmark') {
      handleProjectState('Insure')
      setBtnTextState({
        textoPreview: 'Bookmark',
        textoNext: 'Fylo',
      })
    } else if (project === 'Insure') {
      handleProjectState('Fylo')
      setBtnTextState({
        textoPreview: 'Insure',
        textoNext: 'Manage',
      })
    } else if (project === 'Fylo') {
      handleProjectState('Manage');
      setBtnTextState({
        textoPreview: 'Fylo',
        textoNext: 'Bookmark',
      })
    }
  }

  const handlePreviousPage = (page) => {
    if (page === 'Manage') {
      handleProjectState('Fylo');
      setBtnTextState({
        textoPreview: 'Insure',
        textoNext: 'Manage',
      })

    } else if (page === 'Bookmark') {
      handleProjectState('Manage');
      setBtnTextState({
        textoPreview: 'Fylo',
        textoNext: 'Bookmark',
      })
    } else if (page === 'Insure') {
      handleProjectState('Bookmark');
      setBtnTextState({
        textoPreview: 'Manage',
        textoNext: 'Insure',
      })
    } else if (page === 'Fylo') {
      handleProjectState('Insure');
      setBtnTextState({
        textoPreview: 'Bookmark',
        textoNext: 'Fylo',
      })
    }
  }



  return (
    <div>
      <div id='container-passador'>
        <button className='btn-passador-display'
          onClick={() => handlePreviousPage(projectState)}
        >
          <img src={arrowLeft} alt="arrow-left" />
          <div>
            <p className='ibarraReal400 size32 height36 black1'
            >{btnTextState.textoPreview}</p>
            <p className='publicSans400 size16 height30 black2'
            >Projeto Anterior</p>
          </div>
        </button>
        <button className='btn-passador-display'
          onClick={() => handleNextPage(projectState)}
        >
          <div>
            <p className='ibarraReal400 size32 height36 black1'
            >{btnTextState.textoNext}</p>
            <p className='publicSans400 size16 height30 black2'
            >Próximo Projeto</p>
          </div>
          <img src={arrowRight} alt="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default Passador;

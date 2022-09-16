
import './style.css';

import downArrows from '../assets/icons/down-arrows.svg'
import imageProfile from '../assets/home/image-homepage-profile.jpg'


function Home({handlePageState }) {
    return (
        <div>
            <div id="body">


                <div id="home-card1">

                    <div id="container-texto-card1">
                        <p id="texto-grande"> Olá, me chamo Pedro Rosa e eu amo construir websites lindos</p>

                        <a href="#home-card2">
                            <button id="container-botao-card1">
                                <div id="down-arrows"> <img src={downArrows} alt="down-arrows"
                                    id="down-arrows"></img></div>
                                <span id="botao1">SOBRE MIM</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div id="home-card2">
                    <div id="container-home-card2"> <img src={imageProfile} alt="profile"
                        id="image-profile"></img></div>

                    <div id="container-sobre-mim">
                        <h2 id="titulo-sobre-mim">Sobre mim</h2>

                        <p id="p-sobre-mim">Sou um desenvolvedor front-end júnior procurando por uma oportunidade. Eu foco em
                            escrever HTML acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo. Quando
                            estou escrevendo código JavaScript, na maioria das vezes estou usando React, mas posso me adapta
                            para qualquer ferramenta se necessário. Moro em Brasilia, Brasil, mas também seria feliz trabalhando
                            remotamente e tenho experiência em times remotos. Quando não estou codando, poderá me achar fora de
                            casa. Eu adoro estar próximo a natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria se
                            você desse uma olhada no meu trabalho.</p>

                        <button onClick={() => handlePageState('portfolio')} id="botao2"> IR PARA PORTIFÓLIO</button>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Home;

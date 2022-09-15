
import './App.css';
import iconeTriangulos  from '../assets/icons/icone-triangulos.svg'
import downArrows from '../assets/icons/down-arrows.svg'
import imageProfile from '../assets/home/image-homepage-profile.jpg'
import triangulosLight from '../assets/icons/triangulos-branco.svg'
import githubLight from '../assets/icons/github-light.svg'
import twitterLight from '../assets/icons/twitter-light.svg'
import linkedinLight from '../assets/icons/linkedin-light.svg'


function Home() {
  return (
    <div className="App">
         <div id="body">
        <header>

            <img src={iconeTriangulos} alt="triangulos" id='icone-triangulos'
           
            ></img>
            <div id="cabecalho">
                <a id="link-home" href="https://www.google.com/">HOME</a>
                <a href="https://www.google.com/">PORTFÓLIO</a>
                <a href="https://www.google.com/">CONTATO</a>
            </div>

        </header>

        <div id="home-card1">

            <div id="container-texto-card1">
                <p id="texto-grande"> Olá, me chamo Pedro Rosa e eu amo construir websites lindos</p>

                <button id="container-botao-card1">

                    <div id="down-arrows"> <img src={downArrows} alt="down-arrows"
                            id="down-arrows"></img></div>
                    <span id="botao1">SOBRE MIM</span>
                </button>
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

                <button id="botao2"> IR PARA PORTIFÓLIO</button>
            </div>

        </div>

        <div id="home-card3">

            <h1 id="titulo-card3">Interessado em fazer projetos comigo?</h1>

            <button id="botao3"> CONTATO </button>
        </div>

        <footer id="footer-home">

            <div id="container-footer-home">

                <img src={triangulosLight} alt="triangulos-branco" id="triangulos-branco"></img>
                <a href="https://www.google.com/">HOME</a>
                <a href="https://www.google.com/">PORTFÓLIO</a>
                <a href="https://www.google.com/">CONTATO</a>
                
                <img src={githubLight} alt="github-light" id="github-light"></img>
                <img src={twitterLight} alt="twitter-light" id="twitter-light"></img>
                <img src={linkedinLight} alt="linkedin-light"></img>

            </div>
           

        </footer> 
    </div>
    </div>
  );
}

export default Home;

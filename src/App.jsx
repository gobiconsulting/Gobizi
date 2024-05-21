
import './App.css'
import logo from './assets/logo/LogoGobiziBranca.png'; // Importa a imagem de fundo
import imageSrc from './assets/image.png';
import image2Src from './assets/image2.png';
import image3Src from './assets/image3.png';
import diagnostico from './assets/diagnosticoOrganizacional.png';
import planejamento from './assets/PlanejamentoEstrategico.png';
import processo from './assets/ProcessoInteligente.png';
import icon1 from './assets/icons/icon1.png';
import icon2 from './assets/icons/icon2.png';
import icon3 from './assets/icons/icon3.png';
import icon4 from './assets/icons/icon4.png';
import icon5 from './assets/icons/icon5.png';
import coluna1 from './assets/coluna1.png';
import coluna2 from './assets/coluna2.png';





function App() {
  

  return (
    <div className="App" >
      <header >
      <div className="header-left">
          <img src={imageSrc} alt="" className="imgHeader" />
        </div>
        <div className="header-center">
          <div className="logo-text-container">
            <img src={logo} alt="Logo" className="logo" />
            <p className='text-header'>Nunca foi tão fácil transformar seus resultados!</p>
          </div>
        </div>
        <div className="header-right">
          <img src={image2Src} alt="" className="imgHeaderFooter" />
        </div>
      </header>
      <img src={image3Src} alt="" className="imgHeaderContent" />
      <div className="content">
      
        <div className="left-column">
          <h2>O que fazemos </h2>
          <p>
            Aqui está o texto que você deseja exibir na coluna esquerda. Você
            pode adicionar qualquer conteúdo informativo aqui.
            kkkkkkkkkkkkkkkkkkkkk
            KKKKKKKKKKKKKKKKKKKKK
            KKKKKKKKKKKKK
          </p>
          <button>Quero transformar meus resultados</button>
        </div>
        <div className="right-column">
          <h2 className='h2Contact'>Entre em Contato</h2>
          <form className='formContact'>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="4" />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
        <img src={diagnostico} alt=""  />
          <h3>Diagnóstico Organizacional</h3>
          <p>Informações sobre o primeiro tópico.</p>
        </div>
        <div className="card">
        <img src={planejamento} alt=""  />
          <h3>Planejamento Estratégico</h3>
          <p>Detalhes adicionais sobre outro assunto.</p>
        </div>
        <div className="card">
        <img src={processo} alt=""  />
          <h3>Processos Inteligentes</h3>
          <p>Detalhes importantes para compartilhar.</p>
        </div>
      </div>

      <div className="objectives-section">
        <h2>Quais são seus objetivos?</h2>
        <div className="icon-container">
          <div className="icon-item">
          <img src={icon1} alt=""  />   
                   <p>Otimizar meus processos</p>
          </div>
          <div className="icon-item">
          <img src={icon2} alt=""  />   
                   <p>Aumentar o alcance da minha marca</p>
          </div>
          <div className="icon-item">
          <img src={icon3} alt=""  />  
                    <p>Descobrir e solucionar problemas internos</p>
          </div>
          <div className="icon-item">
          <img src={icon4} alt=""  />  
                    <p>Entender melhor meus clientes</p>
          </div>
          <div className="icon-item">
          <img src={icon5} alt=""  />
                      <p>Aumentar a prospecção de clientes</p>
          </div>
        </div>
      </div>
      <h2>Quais nossas Metodologias ?</h2>
      <div className="metodologia-section content">
        
        <div className="left-column">
          
          <img src={coluna1} alt=""  className='colunaLeft' />
          <button>Quero transformar meus resultados</button>
        </div>
        <div className="right-column">
        <h2 className='column2'></h2>        
          <img src={coluna2} alt=""  className='colunaLeft' />
          <button>Quero transformar meus resultados</button>
        </div>
      </div>
      <footer>
  <div className="footer-left">
    <img src={logo} alt="Logo" className="logo" />
  </div>
  <div className="footer-center">
    <p>Informações da coluna central</p>
  </div>
  <div className="footer-right">
    <p>Informações da coluna direita</p>
  </div>
</footer>
    </div>
  )
}

export default App

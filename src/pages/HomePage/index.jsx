import banner from "../../assets/mountains-190055_1280.jpg";
import "./style.css";

const HomePage = () => {
  return (
    <>
      <header className="headerpage">
        <div className="loginpage">
          <p>Login</p>
          <img></img>
        </div>

        <div>
          <p>Sair</p>
        </div>
      </header>

      <div className="div-banner">
        <img src={banner} className="banner"></img>
      </div>

      <main className="main">
        <p className="servico">Serviços oferecidos</p>
        <div className="modais">
          <div className="modal">
            <p className="textmodais">Manicure e Pedicure</p>
          </div>
          <div className="modal">
            <p className="textmodais">Depilação</p>
          </div>
          <div className="modal">
            <p className="textmodais">Designer de Sombrancelha</p>
          </div>
          <div className="modal">
            <p className="textmodais">Alongamento de Cilios</p>
          </div>

          <div className="modal">
            <p className="textmodais">Servicos a domicilio</p>
          </div>
          <div className="modal">
            <p className="textmodais">contato</p>
          </div>
        </div>
      </main>

      <footer>
        <ul>
          <li>Duvida</li>
          <li>Quem somos</li>
        </ul>
      </footer>
    </>
  );
};

export default HomePage;

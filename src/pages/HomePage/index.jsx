import banner from "../../assets/mountains-190055_1280.jpg";
import "./style.css";

const HomePage = () => {
  return (
    <div className="body">
      <header className="headerpage">
        <div className="loginpage">
          <p>Login</p>
          <img></img>
        </div>

        <div>
          <p>sair</p>
        </div>
      </header>

      <div className="div-banner">
        <img src={banner} className="banner"></img>
      </div>

      <main className="main">
        <p>Serviços oferecidos</p>
        <div className="modais">
          <div className="modal">
            <p>Manicure e pedicure</p>
          </div>
          <div className="modal">
            <p>Depilação</p>
          </div>
          <div className="modal">
            <p>Designer de Sombrancelha</p>
          </div>
          <div className="modal">
            <p>Alogamento de Cilios</p>
          </div>
          <div className="modal">
            <p>Cosmeticos</p>
          </div>
          <div className="modal">
            <p>Servicos a domicilio</p>
          </div>
          <div className="modal">
            <p>contato</p>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <ul>
            <li>duvida</li>
            <li>quem somos</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

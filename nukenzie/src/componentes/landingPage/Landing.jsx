import "./landing.css";
import img from "./src/Group262.png";

export const Landing = ({ setIsLoggedIn }) => {
  return (
    <div className="conteiner">
      <div className="conteinerContent">
        <div className="logo">
          <span className="span1">Nu</span>
          <span className="span2">Kenzie</span>
        </div>
        <h3>Centralize o controle das suas finanças</h3>
        <p>de forma rápida e segura</p>
        <button onClick={() => setIsLoggedIn(true)} id="btnEntrar">
          Iniciar
        </button>
      </div>
      <div className="imgGrid">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

import "./header.css";
export const Header = ({ setIsLoggedIn }) => {
  return (
    <header>
      <span>
        <p className="span1">Nu</p>
        <p className="span2Homepage">Kenzie</p>
      </span>
      <button
        onClick={() => setIsLoggedIn(false)}
        id="btnVoltar"
        className="btnVoltar"
      >
        Inicio
      </button>
    </header>
  );
};

import "./../lista.css";

export const LiCard = ({ arr }) => {
  if (arr.type === "entrada") {
    return (
      <li className="transaçãoEntrada allLi">
        <div>
          <h4>{arr.description}</h4>
          <div>
            <span>{`R$ ${arr.value}`}</span>
            <button>X</button>
          </div>
        </div>
        <span>{arr.type}</span>
      </li>
    );
  } else {
    return (
      <li className="transaçãoSaida allLi">
        <div>
          <h4>{arr.description}</h4>
          <div>
            <span>{`R$ -${arr.value}`}</span>
            <button>X</button>
          </div>
        </div>
        <span>{arr.type}</span>
      </li>
    );
  }
};

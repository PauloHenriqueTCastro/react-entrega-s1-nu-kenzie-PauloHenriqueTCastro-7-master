import "./lista.css";
import { LiCard } from "./LiTransações/liEntrada";

export const ListaTransações = (props) => {
  const allTransações = props.arrTransações;

  // const entradas = props.arrTransações.filter(
  //   (object) => object.type === "entrada"
  // );
  // const saidas = props.arrTransações.filter(
  //   (object) => object.type === "saída"
  // );

  return (
    <div className="conteinerLista">
      <div>
        <h4>Resumo financeiro</h4>
        <div>
          <button>Todos</button>
          <button>Entradas</button>
          <button>Despesas</button>
        </div>
      </div>
      <ul id="ulMae">
        {allTransações.map((element, index) => (
          <LiCard arr={element} key={index} />
        ))}

        {/* <li className="transaçãoEntrada allLi">
          <div>
            <h4>Salário recebido</h4>
            <div>
              <span>R$ 1.660,00</span>
              <button>X</button>
            </div>
          </div>
          <span>Entrada</span>
        </li>
        <li className="transaçãoSaida allLi">
          <div>
            <h4>Salário recebido</h4>
            <div>
              <span>R$ 1.660,00</span>
              <button>X</button>
            </div>
          </div>
          <span>Entrada</span>
        </li> */}
      </ul>
    </div>
  );
};

import { useState } from "react";
import "./card.css";

export const Cards = ({ addTransação }) => {
  const [formData, setFormData] = useState({
    description: "Sem Descrição",
    type: "entrada",
    value: 0,
  });

  let [valorTotal, setValorTotal] = useState(1000);
  function valorTrasação() {
    const input2 = document.getElementById("input2");
    const select = document.getElementById("select");

    if (select.value === "saída") {
      if (input2.value === "") {
        console.log("Digite um valor");
      } else {
        setValorTotal(valorTotal - parseInt(input2.value));
      }
    } else {
      if (input2.value === "") {
        console.log("Digite um valor");
      } else {
        setValorTotal(valorTotal + parseInt(input2.value));
      }
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    addTransação(formData);
    valorTrasação();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="conteinerDescrição">
          <h4>Descrição</h4>
          <input
            id="input1"
            type="text"
            placeholder="Digite aqui sua descrição"
            // value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="conteinerTipoTransação">
          <div>
            <h4>Valor</h4>
            <input
              id="input2"
              type="number"
              placeholder="Valor"
              // value={formData.value}
              onChange={(event) =>
                setFormData({ ...formData, value: event.target.value })
              }
            />
          </div>
          <div>
            <h4>Tipo de valor</h4>
            <select
              id="select"
              name="tipoDeValor"
              onChange={(event) =>
                setFormData({ ...formData, type: event.target.value })
              }
              // defaultValue={formData.type}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
      <div className="conteinerValorTotal">
        <div>
          <h4>Valor total:</h4>
          <span id="vTotal">R$ {valorTotal}.00</span>
        </div>
        <span>O valor se refere ao saldo</span>
      </div>
    </div>
  );
};

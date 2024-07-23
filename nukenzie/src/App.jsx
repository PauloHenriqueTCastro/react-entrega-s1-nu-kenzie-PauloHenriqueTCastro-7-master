import "./Reset.css";
import "./App.css";
import { Header } from "./componentes/headers/header";
import { useState } from "react";
import { Cards } from "./componentes/cardAdicionarDespesa/card";
import { ListaTransações } from "./componentes/listaTransacoes/lista";
import { Landing } from "./componentes/landingPage/Landing";
function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 1250 },
    { description: "Conta de agua", type: "saída", value: 6540 },
    { description: "auxilio", type: "entrada", value: 500 },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function addTransação(formData) {
    setListTransactions([...listTransactions, formData]);
  }

  return (
    <div className="App">
      <>
        {isLoggedIn ? (
          <>
            <Header setIsLoggedIn={setIsLoggedIn} />
            <div className="conteinerCadastroTransação">
              <Cards
                list={listTransactions}
                setList={setListTransactions}
                addTransação={addTransação}
              />

              <ListaTransações arrTransações={listTransactions} />
            </div>
          </>
        ) : (
          <Landing setIsLoggedIn={setIsLoggedIn} />
        )}
      </>
    </div>
  );
}

export default App;

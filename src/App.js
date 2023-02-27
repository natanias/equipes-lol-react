import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Posicao from "./components/Posicao";
import Rodape from "./components/Rodape";

function App() {
  const posicoes = [
    {
      nome: "Top",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Jg",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Mid",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Adc",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Sup",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdd = (jogador) => {
    setJogadores([...jogadores, jogador]); // antigo/novo
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        posicoes={posicoes.map((posicao) => posicao.nome)}
        aoJogadorCadastrado={(jogador) => aoNovoJogadorAdd(jogador)}
      />

      {posicoes.map((posicao) => (
        <Posicao
          key={posicao.nome}
          nome={posicao.nome}
          corPrimaria={posicao.corPrimaria}
          corSecundaria={posicao.corSecundaria}
          jogadores={jogadores.filter(
            (jogador) => jogador.posicao === posicao.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;

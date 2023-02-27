import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [time, setTime] = useState("");
  const [imagem, setImagem] = useState("");
  const [posicao, setPosicao] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    props.aoJogadorCadastrado({
      nome,
      time,
      imagem,
      posicao,
    });
    setNome("");
    setTime("");
    setImagem("");
    setPosicao("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha abaixo os dados para criar o card da sua equipe.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Time"
          placeholder="Digite seu cargo"
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder=" Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Posição"
          itens={props.posicoes}
          valor={posicao}
          aoAlterado={(valor) => setPosicao(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;

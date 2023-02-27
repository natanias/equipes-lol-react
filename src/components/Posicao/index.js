import Jogador from "../Jogador";
import "./posicao.css";

const Posicao = (props) => {
  const secundaria = { backgroundColor: props.corSecundaria };
  const primaria = { borderColor: props.corPrimaria };
  return (

    (props.jogadores.length > 0) ? <section className="posicao" style={secundaria}>
      <h3 style={primaria}>{props.nome}</h3>
      <div className="jogadores">
      {props.jogadores.map((jogador) => (
        <Jogador
          corDeFundo={props.corPrimaria}
          key={jogador.nome}
          nome={jogador.nome}
          time={jogador.time}
          imagem={jogador.imagem}
        />
      ))}
      </div>
    </section>
    : ""
  );
};

export default Posicao;

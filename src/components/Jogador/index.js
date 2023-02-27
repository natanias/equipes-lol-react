import "./jogador.css";

const Jogador = ({ nome, time, imagem, corDeFundo }) => {
  const cor = { backgroundColor: corDeFundo };
  return (
    <div className="jogador">
      <div className="cabecalho" style={cor}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{time}</h5>
      </div>
    </div>
  );
};

export default Jogador;

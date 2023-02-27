import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/imagens/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/imagens/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/imagens/ig.png" alt="a" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/shot.png" alt="logo Near" />
      </section>
      <section>
        <p>Para Jogadores de League of Legend</p>
      </section>
    </footer>
  );
};

export default Rodape;

import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <img src="src/assets/crocheAtelieLogo.png" alt="croche atelie logo" />
          </div>

          <div>
            <h2>Crochê Ateliê</h2>

            <p>
              Produtos artesanais feitos com amor,
              carinho e dedicação.
            </p>
          </div>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h3>Navegação</h3>

            <a href="#">Início</a>
            <a href="#">Produtos</a>
            <a href="#">Categorias</a>
          </div>

          <div className="footer-column">
            <h3>Contato</h3>

            <a href="#">WhatsApp</a>
            <a href="#">Instagram</a>
            <a href="#">Email</a>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © {currentYear} Crochê Ateliê — Todos os direitos reservados.
      </div>

    </footer>
  );
}
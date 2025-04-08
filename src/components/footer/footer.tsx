import style from "./footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footer__conteudo}>
          <div className={style.footer__conteudo__esquerda}>
            <img
              src="../image/MUBI-logo.png"
              alt="Mubi Logo"
              className={style.footer__conteudo__esquerda__logo}
            />
            <div className={style.footer__conteudo__esquerda__social}>
              <p
                className={style.footer__conteudo__esquerda__social__paragrafo}
              >
                Siga-nos no
              </p>
              <div className={style.footer__conteudo__esquerda__social__redes}>
                <a href="#">
                  <i className="ri-instagram-line" />
                </a>
                <a href="#">
                  <i className="ri-facebook-circle-fill" />
                </a>
                <a href="#">
                  <i className="ri-tiktok-fill" />
                </a>
                <a href="#">
                  <i className="ri-twitter-x-fill" />
                </a>
                <a href="#">
                  <i className="ri-threads-fill" />
                </a>
                <a href="#">
                  <i className="ri-youtube-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className={style.footer__conteudo__centro}>
            <ul className={style.footer__conteudo__centro__links}>
              <li className={style.footer__conteudo__centro__links_link}>
                Sobre
              </li>
              <li className={style.footer__conteudo__centro__links_link}>
                Maneiras de Assistir
              </li>
              <li className={style.footer__conteudo__centro__links_link}>
                Ajuda
              </li>
              <li className={style.footer__conteudo__centro__links_link}>
                Assinaturas
              </li>
              <li className={style.footer__conteudo__centro__links_link}>
                Estudantes
              </li>
              <li className={style.footer__conteudo__centro__links_link}>
                Termos e Privacidade
              </li>
            </ul>
          </div>
          <div className={style.footer__conteudo__direita}>
            <ul className={style.footer__conteudo__direita__links}>
              <li className={style.footer__conteudo__direita__links_link}>
                Dê MUBI de presente.
              </li>
              <li className={style.footer__conteudo__direita__links_link}>
                Vagas
              </li>
              <li className={style.footer__conteudo__direita__links_link}>
                Contribuir
              </li>
              <li className={style.footer__conteudo__direita__links_link}>
                NOTEBOOK
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

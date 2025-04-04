import style from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.header__conteudo}>
          <div className={style.header__conteudo__esquerda}>
            <img
              src="../image/MUBI-logo.png"
              alt="Mubi Logo"
              className={style.header__conteudo__esquerda__logo}
            />

            <div className={style.header__conteudo__esquerda__search}>
              <label
                htmlFor="search-bar"
                className={style.header__conteudo__esquerda__search__label}
              >
                <i className="ri-search-line" />
              </label>
              <input
                type="text"
                id="search-bar"
                className={style.header__conteudo__esquerda__search__input}
                placeholder="Buscar"
              />
            </div>
          </div>

          <div className={style.header__conteudo__direita}>
            <ul className={style.header__conteudo__direita__lista}>
              <li className={style.header__conteudo__direita__lista__item}>
                <a href="#">LANÇAMENTOS</a>
              </li>
              <li className={style.header__conteudo__direita__lista__item}>
                <a href="#">GÊNEROS</a>
              </li>
              <li className={style.header__conteudo__direita__lista__item}>
                <a href="#">PARA ASSISTIR</a>
              </li>
            </ul>

            <button className={style.header__conteudo__direita__menu}>
              <i className="ri-menu-line" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

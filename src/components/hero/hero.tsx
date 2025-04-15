"use client";

import { useState } from "react";
import style from "./hero.module.scss";

export default function Hero() {
  const [isFavorito, setIsFavorito] = useState(false);

  const toggleFavorito = () => {
    setIsFavorito((prev) => !prev);
  };
  return (
    <div className={style.hero}>
      <div className={style.hero__container}>
        <img
          src="../../../image/films/la-la-land.png"
          alt="La La Land"
          className={style.hero__container__poster}
        />

        <div className={style.hero__container__content}>
          <img
            src="../../../image/films/logo.png"
            alt="La La Land Logo"
            className={style.hero__container__content__logo}
          />
          <p className={style.hero__container__content__text}>
            Mia, uma aspirante a atriz, e Sebastian, um pianista de jazz, se
            apaixonam em Los Angeles enquanto perseguem seus sonhos. O filme
            mistura romance, música e dilemas entre amor e ambição, em uma
            celebração vibrante da vida e da arte.
          </p>
          <div className={style.hero__container__content__button}>
            <button className={style.hero__container__content__button__watch}>
              <span>
                <i className="ri-play-fill" /> Assistir
              </span>
            </button>
            <button
              className={style.hero__container__content__button__playlist}
              onClick={toggleFavorito}
            >
              <i className={isFavorito ? "ri-check-line" : "ri-add-line"}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

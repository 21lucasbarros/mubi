"use client";

import { ReactNode, useState } from "react";
import style from "./section.module.scss";

interface SectionProps {
  children: ReactNode;
  title: ReactNode;
}

export default function Section({ children, title }: SectionProps) {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <div className={style.section}>
        <div
          className={style.section__conteudo}
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
        >
          <div className={style.section__conteudo__header}>
            <h3 className={style.section__conteudo__header__titulo}>{title}</h3>
            {showMessage && (
              <span className={style.section__conteudo__header__span}>
                VER TUDO <i className="ri-arrow-right-double-line" />
              </span>
            )}
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

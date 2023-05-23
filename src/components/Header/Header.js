import React from "react";

import SearchBox from "../SearchBox";

import "./Header.scss";

export function Header() {
  return (
    <header>
      <img
        alt="Mercado Libre"
        className="header-logo"
        src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.8/mercadolibre/logo__large_plus.png"
      />
      <SearchBox />
    </header>
  );
}

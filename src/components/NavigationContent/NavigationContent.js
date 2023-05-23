import React from "react";
import {Route, useLocation, Routes} from "react-router-dom";
import SearchView from "../../views/Search";
import Detail from "../../views/Detail";

export function NavigationContent() {
  const query = new URLSearchParams(useLocation().search);

  return (
    <main role="main">
      <Routes>
        <Route
          exact
          path="/items"
          Component={() => <SearchView search={query.get("search")} />}
        />
          <Route path="/items/:id" Component={Detail} />
      </Routes>
    </main>
  );
}

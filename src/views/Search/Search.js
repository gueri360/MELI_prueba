import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import ItemsList from "../../components/ItemsList";

export function Search({ search }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then(response => response.json())
      .then(response => {
        if (!response.error) {
            console.log(response);
          setItems(response.results);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [search]);

  return isEmpty(items) ? null : (
    <>
      <ItemsList items={items} />
    </>
  );
}

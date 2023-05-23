import React from "react";
import Item from "./Item";
import "./ItemsList.scss";

export function ItemsList({ items }) {

  const shortList = items.slice(0, 4);
  return (
    <ol className={"items-list"}>
      {shortList.map((item) => (
          <Item key={item.id} {...item} />
      ))}
    </ol>
  );
}

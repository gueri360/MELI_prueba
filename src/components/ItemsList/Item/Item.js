import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";
import formatPrice from "../../functions/formatPrice";

export function Item({ id, title, thumbnail, price, free_shipping, address ,  currency_id }) {
  return (
    <li className={"items-list-item"}>
      <Link
        to={{
          pathname: `/items/${id}`
        }}
      >
        <img src={thumbnail} alt={title} />
      </Link>
      <div className={"item-data"}>
        <p className={"item-price"}>
            {formatPrice(price, currency_id)}
          {price.decimals ? (
            <span className={"item-price-decimals"}>{price.decimals}</span>
          ) : null}
        </p>
        {free_shipping ? (
          <span className={"item-free-shipping"}>Env&iacute;o Gratis!</span>
        ) : null}
        <Link
          className={"item-title"}
          to={{
            pathname: `/items/${id}`
          }}
        >
          <p>{title}</p>
        </Link>
      </div>
      <p className={"item-origin"}>
        {address.state_name}
      </p>
    </li>
  );
}

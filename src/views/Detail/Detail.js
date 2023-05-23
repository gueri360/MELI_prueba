import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";

import ItemDetail from "../../components/ItemDetail";
import { useParams } from "react-router-dom";

export function Detail() {
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(response => response.json())
            .then(response => {
                if (!response.error) {
                    setItem(response);
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return isEmpty(item) ? null : (
        <div className="detail-view">
            <ItemDetail item={item} />
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "./DettaglioProdotto.css";

function DettaglioProdotto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
      })
      .catch(error => {
        console.error("Errore caricamento:", error);
      });
  }, [id]);

  if (!product) {
    return <p>Prodotto in caricamento...</p>;
  }
  return (

  );

    }

export default DettaglioProdotto;
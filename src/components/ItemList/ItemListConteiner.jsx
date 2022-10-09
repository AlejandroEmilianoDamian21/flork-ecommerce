import React, { useState, useEffect } from "react";
import "./itemlistcontainer.css";

import { getDiseños, getDiseñosByCategory } from "../../API/API";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [desingsList, setDesingsList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getDiseños().then((data) => {
        console.log("GetCurso");
        setDesingsList(data);
      });
    } else {
      getDiseñosByCategory(categoryID).then((data) => {
        setDesingsList(data);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Impresiones 3d</h1>
      <ItemList desingsList={desingsList} />
    </div>
  );
}

export default ItemListContainer;

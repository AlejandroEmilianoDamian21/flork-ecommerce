import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.desingsList.map((diseño3d) => {
          return (
            <Card
              key={diseño3d.id}
              id={diseño3d.id}
              title={diseño3d.title}
              img={diseño3d.img}
              price={diseño3d.price}
              detail={diseño3d.detail}
              stock={diseño3d.stock}
              expired={diseño3d.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;

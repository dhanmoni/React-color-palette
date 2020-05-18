import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorBoxList = SortableContainer((props) => {
  return (
    <div style={{ height: "100%" }}>
      {props.colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color.color}
          name={color.name}
          handleClick={() => props.removeColor(color.name)}
          key={color.name}
        />
      ))}
    </div>
  );
});

export default DraggableColorBoxList;

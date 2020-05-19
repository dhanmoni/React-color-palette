import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

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
          distance={20}
        />
      ))}
    </div>
  );
});

export default DraggableColorBoxList;

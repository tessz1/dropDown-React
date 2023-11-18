import React from "react";

function DropDownItem({ item, selected, onSelect }) {
  const itemStyle = {
    fontWeight: selected ? "bold" : "normal",
    userSelect: "none",
  };

  return (
    <li style={itemStyle} onClick={() => onSelect(item)}>
      {item}
    </li>
  );
}

export default DropDownItem;

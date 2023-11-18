import React from "react";
import DropItem from "./DropDownItem";

function DropdownList({ items, selectedItem, onSelect }) {
    const listStyles = {
        outline: "0",
        background: "#ffff",
        minWidth: "260px",
        border: "0",
        borderRadius: "4px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        padding: "16px 20px",
        color: "#FFFFFF",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "1.2px",
        textTransform: "uppercase",
        overflow: "hidden",
        cursor: "pointer",
        color:  "#00000",
    }
    return (
    <ul style={listStyles}>
      {items.map((item, index) => (
        <DropItem
          key={index}
          item={item}
          selected={item === selectedItem}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

export default DropdownList;

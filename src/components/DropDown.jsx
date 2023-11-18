import React, { useState } from "react";
import DropdownList from "./DropdownList";

function Dropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!isDropdownVisible);
  };

  const items = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    // setDropdownVisible(true); 
  };
  const componentStyleButton = {
    outline: "0",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#5380F7",
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
  };

  return (
    <div>
      <button onClick={toggleDropdown} style={componentStyleButton}>ACCOUNT SETTING</button>
      {isDropdownVisible && (
        <DropdownList items={items} selectedItem={selectedItem} onSelect={handleSelectItem} />
      )}
    </div>
  );
}

export default Dropdown;


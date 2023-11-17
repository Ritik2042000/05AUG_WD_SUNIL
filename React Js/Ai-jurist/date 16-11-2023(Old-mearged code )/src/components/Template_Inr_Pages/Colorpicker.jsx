import React, { useState } from "react";

const Colorpicker = () => {
  const templateColors = [
    { id: 1, colorCode: "#ff009980" },
    { id: 2, colorCode: "#3CB37180" },
    { id: 3, colorCode: "#FF634780" },
    { id: 4, colorCode: "#1E90FF80" },
    { id: 5, colorCode: "#6A5ACD80" },
  ];

  // State to manage the selected color
  const [selectedColor, setSelectedColor] = useState("#fff");

  const handleColorChange = (colorCode) => {
    setSelectedColor(colorCode);
  };

  return (
    <>
      <div className="color-picker-container">
        <div
          className="color-box"
          style={{ backgroundColor: selectedColor }}
        ></div>
        <div className="select-color">
          <div className="d-flex justify-content-between">
            {templateColors.map((colorSelector) => {
              return (
                <div key={colorSelector.id}>
                  <div
                    title={colorSelector.colorCode}
                    className="color-selector"
                    style={{ backgroundColor: colorSelector.colorCode }}
                    onClick={() => handleColorChange(colorSelector.colorCode)}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Colorpicker;

import React from "react";

const Cursor = ({ cursorPosition }) => {
  const { top, left, transform } = cursorPosition;
  return (
    <div className="cursor-container" style={{ top, left, transform }}>
      <div className="cursor">DRAG</div>
    </div>
  );
};

export default Cursor;

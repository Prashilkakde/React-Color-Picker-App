import React from "react";
import "./app.css";

class ColorBlock extends React.Component {
  render() {
    return (
      <div
        className="color-block"
        onClick={() => {
          this.props.onClick(this.props.color);
        }}
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}
export default ColorBlock;

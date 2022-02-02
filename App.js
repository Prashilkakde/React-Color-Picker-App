import "./styles.css";
import "./app.css";
import React from "react";
import ColorBlock from "./ColorBlock";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "grey"
    };
  }
  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };

  render() {
    return (
      <>
        <div className="color-container">
          {/* <div
            className="color-block"
            onClick={() => {
              this.updateColor("red");
            }}
            style={{ backgroundColor: "red" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("yellow");
            }}
            style={{ backgroundColor: "yellow" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("orange");
            }}
            style={{ backgroundColor: "orange" }}
          ></div>
          <div
            className="color-block"
            onClick={() => {
              this.updateColor("green");
            }}
            style={{ backgroundColor: "green" }}
          ></div> */}
          <ColorBlock color="red" onClick={this.updateColor} />
          <ColorBlock color="yellow" onClick={this.updateColor} />
          <ColorBlock color="blue" onClick={this.updateColor} />
          <ColorBlock color="orange" onClick={this.updateColor} />
          <ColorBlock color="green" onClick={this.updateColor} />
        </div>
        <div
          className="target-div"
          style={{ backgroundColor: this.state.color }}
        ></div>
      </>
    );
  }
}
export default App;

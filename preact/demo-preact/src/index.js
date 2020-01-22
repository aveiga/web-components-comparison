import "./style";
import { Component } from "preact";
import register from "preact-custom-element";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

register(App, "demo-preact");

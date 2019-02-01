import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "yes"
    };
  }

  render() {
    return (
      <div>
        <h1>State is important {this.state.answer}</h1>
      </div>
    );
  }
}

/*const App = () => <div>Hello</div>;*/
export default App;

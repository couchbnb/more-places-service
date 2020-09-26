import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="picture"></div>
        <div id="rate"></div>
      </div>
    );
  }
}

export default App;

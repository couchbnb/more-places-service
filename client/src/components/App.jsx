import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="picture" />
        <div id="rate" />
      </div>
    );
  }
}

export default App;

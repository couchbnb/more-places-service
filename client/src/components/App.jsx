import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: [],
    };
    this.getHost = this.getHost.bind(this);
  }

  componentDidMount() {
    this.getHost();
  }

  getHost() {
    axios
      .get('/data')
      .then((response) => {
        this.setState({
          doc: response.data,
        });
      })
      .catch((err) => (err));
  }

  render() {
    return (
      <div>
        <div id="picture" />
        <List data={this.state.doc} />
        Hello World
        <div id="rate" />
      </div>
    );
  }
}

export default App;

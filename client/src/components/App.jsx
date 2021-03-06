import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';

const Wrapper = styled.div`
    padding-top: 350px;
    padding-right: 120px;
    padding-bottom: 100px;
    padding-left: 100px
  `;

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
    const id = Math.floor((Math.random() * 100) + 1);
    axios
      .get('/data', {
        params: { roomid: id },
      })
      .then((response) => {
        this.setState({
          doc: response.data.host,
        });
      })
      .catch((err) => (err));
  }

  render() {
    return (
      <div>
        <Wrapper id="App">
          <List id="List" data={this.state.doc} />
        </Wrapper>
      </div>
    );
  }
}

export default App;

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import List from './List.jsx';

const Wrapper = styled.div`
    padding-top: 400px;
    padding-right: 50px;
    padding-bottom: 100px;
    padding-left: 50px
  `;

const Top = styled.section`
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px; 
`;
const Right = styled.div`
  align-items: center !important;
  display: flex !important;
  white-space: nowrap  
`;
const Title = styled.div`
  text-align: left;
  color: black;
  padding-bottom: 0px;
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 26px
  `;

const Button = styled.span`
  display: inline-flex;
  appearance: none 
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  border: 1px solid;
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
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
        // console.log(response.data.host)
        this.setState({
          doc: response.data.host,
        });
      })
      .catch((err) => (err));
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Top>
            <Title>More places to stay</Title>
            <Right>
            <div> 1/4 </div>
            <Button>pre</Button>
            <Button>next </Button>
            </Right>
          </Top>
          <div>
            <List data={this.state.doc} />
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;

/* style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          flexWrap: 'nowrap',
          border: '5px',
          height: '300px',
          width: '600px',
          justifyContent: 'space-between',
          backgroundColor: 'blue',
        }} */

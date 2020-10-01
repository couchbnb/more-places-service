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
const Grid = styled.section`
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
outline: none;
touch-action: manipulation;
align-items: center;
justify-content: center;
cursor: pointer;
width: 32px;
height: 32px;
border: 1px solid rgba(0, 0, 0, 0.08);
color: rgb(34, 34, 34);
background-color: rgba(255, 255, 255, 0.9);
background-clip: padding-box;
box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
transition: box-shadow 0.2s ease 0s, -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: [],
      property: '',
    };

    this.getHost = this.getHost.bind(this);
    // this.handleClickPrev = this.handleClickPrev.bind(this);
    // this.handleClickNext = this.handleClickNext.bind(this);
  }

  componentDidMount() {
    this.getHost();
  }

  // handleClickPrev() => {}

  // handleClickNext() => {}

  getHost() {
    const id = Math.floor((Math.random() * 100) + 1);
    axios
      .get('/data', {
        params: { roomid: id },
      })
      .then((response) => {
        this.setState({
          doc: response.data.host,
          property: response.data.host[0],
        });
      })
      .catch((err) => (err));
  }

  render() {
    return (
      <div>
        <Wrapper id="App">
          <Grid>
            <Title id="title">More places to stay</Title>
            <Right>
              <div> 1/4 </div>
              <Button >{'<'}</Button>
              <Button id="nextButton">{'>'}</Button>
            </Right>
          </Grid>
          <List id="List" data={this.state.doc} />
        </Wrapper>
      </div>
    );
  }
}

export default App;

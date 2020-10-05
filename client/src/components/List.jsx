import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const Grid = styled.section`
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px; 
    padding-left: 18px;
    padding-right: 20px;
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
const Hide = styled.div`
display: flex;
overflow: auto hidden;
position: relative;
`;
const Slide = styled.div`
display: flex;
height: 100%;
list-style: none;
transition: transform 0.5s;
padding-left: 0px;
margin-bottom: 0px;
margin-top: 0px;
min-width: 100%;
scroll-snap-type: x mandatory;
position: relative;
`;

let motion = 1;
let count;
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: null,
    };

    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.pageNum = this.pageNum.bind(this);
  }

  handleClickPrev() {
    if (motion < 0) {
      motion += 1200;
      document.getElementById('container').style.transform = `translateX(${motion}px)`;
      this.setState({
        num: motion,
      });
    }
  }

  handleClickNext() {
    if (motion > -2399) {
      motion -= 1200;
      document.getElementById('container').style.transform = `translateX(${motion}px)`;
      this.setState({
        num: motion,
      });
    }
  }

  componentDidmount() {
    this.pageNum();
  }

  pageNum() {
    if (this.state.num < 0 && this.state.num > -1200) {
      count = '2/3';
      return count;
    }
    if (this.state.num <= -1200) {
      count = '3/3';
      return count;
    }
    count = '1/3';
    return count;
  }

  render() {
    return (
      <div>
        <Grid>
          <Title id="title">More places to stay</Title>
          <Right>
            <div>
              {this.pageNum()}
            </div>
            <Button onClick={this.handleClickPrev}>{'<'}</Button>
            <Button id="nextButton" onClick={this.handleClickNext}>{'>'}</Button>
          </Right>
        </Grid>
        <Hide>
          <Slide id="container">
            {this.props.data.map((item, index) => <Item id="item" item={item} key={index} />)}
          </Slide>
        </Hide>
      </div>
    );
  }
}

export default List;

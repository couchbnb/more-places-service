import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const Grid = styled.section`
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px; 
    padding-left: 18px;
    padding-right: 20px;
`;
const Right = styled.div`
  align-items: center !important;
  display: flex !important;
  white-space: nowrap;
  justify-content: space-between;  
`;
const Arrleft = styled.div`
margin-right: 6px;  
`;
const Arrright = styled.div`
margin-left: 6px;
`;
const Title = styled.div`
  text-align: left;
  padding-top: 4px;
  padding-bottom: 0px;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 26px
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
 
   
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
const Number = styled.div`
color: rgb(34, 34, 34) !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    line-height: 18px !important;
    margin-right: 16px !important;
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
      count = '2 / 3';
      return count;
    }
    if (this.state.num <= -1200) {
      count = '3 / 3';
      return count;
    }
    count = '1 / 3';
    return count;
  }

  render() {
    return (
      <div>
        <Grid>
          <Title id="title">More places to stay</Title>
          <Right>
            <Number>
              {this.pageNum()}
            </Number>
            <Arrleft>
              <Button onClick={this.handleClickPrev}>
                <span>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    style={{
                      height: '10px',
                      width: '10px',
                      display: 'block',
                      fill: 'currentcolor',
                    }}
                  >
                    <path
                      d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </Button>
            </Arrleft>
            <Arrright>
              <Button id="nextButton" onClick={this.handleClickNext}>
                <span>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    style={{
                      height: '10px',
                      width: '10px',
                      display: 'block',
                      fill: 'currentcolor',
                    }}
                  >
                    <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
                  </svg>
                </span>
              </Button>
            </Arrright>
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

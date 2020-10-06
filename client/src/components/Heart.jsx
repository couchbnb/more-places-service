import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const Button = styled.div`
cursor: pointer;
position: relative;
background: transparent;
touch-action: manipulation;
line-height: 20px;
font-weight: 600;
border-radius: 50%;
outline: none;
padding: 2px 0px 0px;
transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
display: inline-flex;
align-items: center;
justify-content: center;
border: none;
color: rgb(250, 250, 250);
margin: 0px;
width: 32px;
height: 32px;
`;

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleHeart = this.handleHeart.bind(this);
  }

  handleHeart() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div>
        {this.state.isToggleOn
          ? (
            <Button id="heartButton" type="button" onClick={this.handleHeart}>
              <div>
                <svg
                  id="heartsvg"
                  type="button"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'rgb(0, 0, 0, 0.5)',
                    height: '24px',
                    width: '24px',
                  }}
                  stroke="currentcolor"
                  strokeWidth="2"
                  overflow="visible"
                >
                  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791
            0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949
            2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                  />
                </svg>
              </div>
            </Button>
          )
          : (
            <Button type="button" onClick={this.handleHeart}>
              <Modal
                open={this.state.isToggleOn}
                onClose={() => this.setState({ isToggleOn: !isToggleOn })}
              />
              <div>
                <svg
                  type="button"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'rgb(255, 56, 92)',
                    height: '24px',
                    width: '24px',
                  }}
                  stroke="currentcolor"
                  strokeWidth="2"
                  overflow="visible"
                >
                  <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791
            0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949
            2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                  />
                </svg>
              </div>
            </Button>
          )}
      </div>
    );
  }
}

export default Heart;

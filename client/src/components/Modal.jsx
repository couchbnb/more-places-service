import React from 'react';
import styled from 'styled-components';

const Out = styled.div`
z-index: 1000;
position: fixed;
top: 95px;
right: 0px;
bottom: 90px;
left: 0px;
padding-top: 12px;
display: flex;
flex-direction: row;
align-items: flex-end;
justify-content: center;
`;
const Save = styled.div`
  background: rgb(255, 255, 255);
  position: relative;
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-radius: 13px;
  animation-duration: 400ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  cursor: default;
`;
const ExitPosition = styled.div`
  position: absolute;
  display: flex;
  top: 16px;
  left: 24px;
  `;
const Exit = styled.div`
cursor: pointer !important;
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  margin: 0px !important;
  padding: 0px !important;
  color: rgb(34, 34, 34) !important;
  touch-action: manipulation !important;
  position: relative !important;
  background: transparent !important;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;`;
const Titlebox = styled.div`
  display: flex !important;
  margin-top: 13px;
  justify-content: center !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  padding: 0px 50px !important;
  color: rgb(34, 34, 34);
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  position: relative
  `;
const End = styled.div`
  display: flex;
  flex: 0 0 auto;
  border-top: 1px solid rgb(235, 235, 235);
  padding-right: 24px;
  padding-top: 480px;
  padding-left: 24px;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  position: absolute;
  `;
const Create = styled.button`
    border: none;
    cursor: pointer !important;
    padding-left: 200px;
    padding-right: 200px;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 20px;
    display: inline-block !important;
    margin: 0px !important;
    position: relative !important;
    text-align: center !important;
    touch-action: manipulation !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    border-radius: 8px !important;
    outline: none !important;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    border: none !important;
    background: transparent !important;
    color: rgb(34, 34, 34) !important;
    text-decoration: underline !important;
    width: 100% !important;
  `;
const Pic = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  pointer-events: none;
  overflow: hidden; 
`;
const Frame = styled.div`
padding: 20px 16px !important;
    overflow-y: auto !important;
`;
const Box = styled.button`
cursor: pointer !important;
    position: relative !important;
    touch-action: manipulation !important;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;;
    line-height: 40px;
    font-weight: 400;
    border-radius: 0px;
    outline: none;
    transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
    background: transparent;
    border: none;
    color: inherit;
    display: block;
    margin: 0px;
    padding: 10px;
    width: 100%;
`;
const Inside = styled.div`
display: flex !important;
align-items: center !important;
padding-top: 5px !important;
    padding-right: 410px !important;
    padding-bottom: 5px !important;
    padding-left: 5px !important;border-radius: 8px !important;
`;

export default function Modal({ onClose }) {
  return (
    <div>
      <Out>
        <Save>
          <ExitPosition>
            <Exit type="button" onClick={onClose}>
              <span>
                <svg
                  viewBox="0 0 32 32"
                  type="button"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '16px',
                    width: '16px',
                  }}
                  stroke="currentcolor"
                  strokeWidth="3"
                  overflow="visible"
                >
                  <path d="m6 6 20 20" />
                  <path d="m26 6-20 20" />
                </svg>
              </span>
            </Exit>
          </ExitPosition>
          <Titlebox>
            Save to a list
          </Titlebox>
          <Frame>
            <Box>
              <Inside>
                <Pic src="https://couchbnbpic.s3-us-west-1.amazonaws.com/rooooom.jpg" />
              </Inside>
            </Box>
            <Box>
              <Inside>
                <Pic src="https://couchbnbpic.s3-us-west-1.amazonaws.com/Italy.jpg" />
              </Inside>
            </Box>
            <Box>
              <Inside>
                <Pic src="https://couchbnbpic.s3-us-west-1.amazonaws.com/swan.jpg" />
              </Inside>
            </Box>
          </Frame>
          <End>
            <Create type="button">Create a list</Create>
          </End>
        </Save>
      </Out>

    </div>
  );
}

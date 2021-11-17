/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    background: white;
    min-height: 100%;
  }
`;

export const FlexContainer = styled.main`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  gap: ${(props) => (props.gap ? props.gap : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ProgressWrap = styled.div`
    background: #e8e8e8;
    width: 100%;
    border-radius: 8px;
`;

export const Progress = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    padding: 1px 8px;
    background: ${(props) => (props.background ? props.background : 'black')};
    color: ${(props) => (props.color ? props.color : 'white')};
    width: ${(props) => (props.percent ? `${props.percent}%` : '0%')};
    min-width: min-content;
    border-radius: 8px;
    transition: all 0.15s ease-in-out;
`;

export const SmallLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Item = styled.div`
    color: grey;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
`;

export const ItemBold = styled.div`
    color: black;
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
`;

export const ProgWrap = styled.div`
    display: block;
    width: 100%;
    margin-bottom: 16px;
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const DashWrap = styled.div`
    padding: 1em;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 1fr;
`;

export const Tile = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    background: white;
    border-radius: 16px;
    padding: 1em;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    grid-column: ${(props) => (props.spanning ? 'span 2' : 'auto')};
`;

export const text = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: #2e2e2e;
`;

export const Title = styled(text)`
    padding: 4px 16px;
    border-radius: 8px;
`;

export const Percent = styled(text)`
    font-size: 36px;
`;

export const Amount = styled(text)`
    font-size: 14px;
`;

export const Label = styled.div`
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;
    background: ${(props) => (props.background ? props.background : 'none')};
    padding: 2px 4px;
    border-radius: 8px;
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FlexContainer } from '../../style/utility.style';

export const NavCont = styled(FlexContainer)`
    background: #FF5964;
`;

export const NavTitle = styled.h1`
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 24px;
    font-weight: 300;
    margin: 0.5em;
`;

export const AddCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: auto;
    aspect-ratio: 1/1;
    cursor: pointer;
`;

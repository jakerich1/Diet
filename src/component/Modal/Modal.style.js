/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FlexContainer } from '../../style/utility.style';

export const ModalOuter = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${(props) => (props.open ? 'grid' : 'none')};
    place-items: center;
    background: #00000080;
    z-index: 1000;
    cursor: pointer;
`;

export const ModalInner = styled.div`
    width: 80%;
    min-height: 80%;
    background: white;
    border-radius: 16px;
    padding: 1em;
    cursor: auto;
`;

export const Action = styled(FlexContainer)`
    margin-bottom: 16px;
`;

export const AddItem = styled(FlexContainer)`
    flex: 1;
    height: auto;
    aspect-ratio: 1/1;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 16px;
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 16px;
    background: ${(props) => (props.background ? props.background : 'none')};
    cursor: pointer;
    transform-origin: center;
    transition: all 0.15s ease-in-out;


    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 0px 0px;
        transform: translateY(2px) scale(0.995);
    }
`;

export const Menu = styled.div`

`;

export const InputNum = styled.input`
    display: block;
    width: 100%;
    border: none;
    padding: 4px 8px;
    background: #ebebeb;
    border-radius: 8px;
    margin-bottom: 16px;
`;

export const Line = styled.div`
    display: block;
    width: 100%;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 16px;
`;

export const Submit = styled.button`
    display: inline-block;
    padding: 0.5em 2em;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    background: ${(props) => (props.background ? props.background : 'none')};
    color: white;
    font-family: 'Poppins', sans-serif;
    transition: all 0.15s ease-in-out;
    border: none;

    &:hover{
        filter: brightness(0.5);
    }
`;

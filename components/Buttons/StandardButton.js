import styled from 'styled-components';
import { AlmostWhite, Black, White } from '../../lib/Colors';

export const StandardButton = styled.button`
    cursor: pointer;
    border: 1px solid black;
    border-radius: 15px;
    width: 163px;
    height: 56px;
    color: ${AlmostWhite};
    background-color: ${Black};
    :hover{
        color: ${Black};
        background-color: ${White};
    }

`
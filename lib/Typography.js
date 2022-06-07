import styled from 'styled-components';

export const Heading = styled.h1`
    font-size: 80px;
    font-weight: bold;
    text-justify: end;
    @media only screen and (max-width: 450px){
        font-size: 36px;
    }

`

export const BodyM = styled.p`
    font-size: 18px;
    line-height: 28px;
    max-width: ${props => props.maxWidth};
    color: ${props => props.color};
`

export const BodyS = styled.p`
    font-size: 14px;
    line-height: 16px;
`

export const ButtonText = styled.span`
    font-size: 18px;
    line-height: 28px;
    font-weight: bold;
`
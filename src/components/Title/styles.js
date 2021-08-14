import styled from 'styled-components'

export const Container = styled.h3`
    font-size: 36px;
    position: relative;
    display: inline;
    margin-bottom: 32px;

    &:after{
        content: '';
        height: 4px;
        width: 25%;
        position: absolute;
        background: ${props => props.theme.colors.primary};
        border-radius: 9999px;
        bottom: -4px;
        left: 0;
        
    }

`
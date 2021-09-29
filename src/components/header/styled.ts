import styled from "styled-components"

export const Header = styled.div`
    width: 100%;
    height: 60px;
    background-color: blue;
`

export const HeaderImg = styled.img`
    src: url(${(props) => props.src});
    width: 50px;
    height: 50px;
    padding-left: 20%;
    float: left;
    padding-top: 5px;
`

export const HeaderText = styled.div`
    width: auto;
    height: auto;
    padding-top: 15px;
    color: white
`
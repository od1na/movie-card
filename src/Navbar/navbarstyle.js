import styled from "styled-components"
import {ReactComponent as search} from '../assets/icons/Group.svg'

export const Container = styled.div`
background:#212121;
width:100%;
`
export const Wrap = styled.div`
color:white;
height:70px;
width:100%;
border-bottom:1px solid rgba(255,255,255,0.2);
display:flex;
align-items:center;
justify-content:center;
`

export const InputContainer = styled.div`
display:flex;
align-items:center;
heigt:300px;
background: rgba(255, 255, 255, 0.2);
border-radius: 0p`


InputContainer.Inputs = styled.input`
width:300px;
padding-left:10px;
background: #000000;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: rgba(255, 255, 255, 0.2);
`

export const IconWrapper = styled.div`
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px ;
padding:8px 15px;
display:flex;
align-items:center;
justify-content:center;
`
InputContainer.Search = styled(search)`

`
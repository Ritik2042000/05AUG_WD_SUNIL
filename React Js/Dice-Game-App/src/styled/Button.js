import  { styled } from 'styled-components'

export const Button = styled.button`
min-width: 220px;
margin:0 0 0 100px;
padding: 10px 18px;
color:#fff;
border-radius: 5px;
background: #000;
border : 1px solid transparent ;
font-size: 16px;
cursor: pointer;
transition: all 0.3s ease-in;     
&:hover{
    background-color: #fff;
    color:#000;
    border : 1px solid black ;
    
}`

export const OutLineButton = styled(Button)`
color:black;
border-radius: 5px;
background: white;
border : 1px solid black ;     
&:hover{
    background-color: black;
    color:#fff;
    border : 1px solid transparent ;
    
}
`

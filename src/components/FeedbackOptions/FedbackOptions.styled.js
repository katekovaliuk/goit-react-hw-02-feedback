import styled from "styled-components";



export const ButtonBox = styled.div`
display: flex;
justify-content: space-around;
width: 320px;
margin-top: 30px;

margin-right: auto;
`;

export const Button = styled.button`
padding: 5px 10px;

border-radius: 5px;
background-color: #ffffff;
box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
1px 4px 6px rgb(0 0 0 / 16%);

font-size: 20px;
cursor: pointer;
text-transform: capitalize;
transition: transform 250ms linear;

:hover{
    background-color: #b3d59c;
    transform: scale(1.2);
}
`;


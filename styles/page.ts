import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    background-image: url('https://github.com/Lgsantos1908/lista_Carros/blob/main/imagens/picapau.jpg?raw=true');
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:center;
    
`;

export const Itens = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content:center;

    div {
        width: 400px;
        height: 400px;
        border-radius:20px;
        background-color: rgba(218, 207, 190, 0.8);
        display: flex;
        align-items: center;
        justify-content:center;
        flex-direction: column;

        h1 {
            margin-bottom: 2rem;
            size: 3rem;
            color: yellow;
        }


        h2 {
            size: 3rem;
            color: white;
            margin: 10px;
        } 
        
        h4{
            size: 3rem;
            margin: 5px;
        }

        h3{
            size: 3rem;
            margin: 5px;
            color: red;
        }
    }
`;
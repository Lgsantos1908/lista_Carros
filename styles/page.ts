import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    
`;

export const Itens = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content:center;

    img{
        width: 17rem;
        height: 17rem;
        
    }

    div {
        width: 400px;
        height: 400px;
        border-radius:20px;
        background-color: rgba(255, 255, 255, 0.5);
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
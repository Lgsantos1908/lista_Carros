import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    
`;

export const Itens = styled.div`
    margin-top: 20px;
    background-image: url("hhttps://i.pinimg.com/originals/0c/db/41/0cdb410391ca1b51e6d4e4d5bb9f7dbf.gif");
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;

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
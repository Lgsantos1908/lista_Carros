import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    
`;

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    //background-image: url("hhttps://i.pinimg.com/originals/0c/db/41/0cdb410391ca1b51e6d4e4d5bb9f7dbf.gif");
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
    h1{
        font-size: 4rem;
        color: yellow;;
    }    

    h2{
        font-size: 2rem;
        width: 50%;
        color: white;

    }
`;

export const Butons = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content:center;
         button {
            width: 10rem;
            height: 3rem;
            margin: 1.5rem;
            border-radius: 10px;
            border: none;
            cursor: pointer;

            &:nth-child(1) {
                background-color: #2374E4;
                animation: pulse 2s infinite;
                color: white;
            
            }

            &:hover{
                background-color: #1E61C1;
            }           

            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
        }
`;

export const StyledButton = styled.button`
  position: absolute;
  
  background-color: red;
  color: white;
  width: 10rem;
  height: 3rem;
  margin: 1.5rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;


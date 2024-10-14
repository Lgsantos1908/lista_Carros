import { 
    Container, 
    Itens,
    Butons,
    StyledButton 
} from '../styles/page'
import { GlobalStyle } from '../styles/global';
import { useEffect, useRef, useState} from 'react';

function Page() {

    return (
        <>
            <GlobalStyle/>
            <Container>
                <Itens>
                     <img src='https://pbs.twimg.com/media/Ea__31zWsAAwjDT.png' alt='Logo restaurante'/>
                    <div>
                        <h1>OBRIGADO,/h1>

                        <h2>Meus pontos fortes</h2>
                        <h4>Responsável</h4>
                        <h4>Proativo</h4>
                        <h4>Comprometido</h4>
                        <h4>Criativo</h4>

                        <h2>Meus pontos fracos</h2>
                        <h3>Não possui</h3>  
                    </div>
                </Itens>
            </Container>
        </>
    );
}

export default Page;

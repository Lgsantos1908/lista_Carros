import { 
    Container, 
    Page,
    Butons,
    StyledButton 
} from '../styles/styles';
import { GlobalStyle } from '../styles/global';
import { useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router';


function Home() {
    
    return (
        <>
            <GlobalStyle/>
            <Container>
                <Page>
                    
                        <img src="" alt="Car">
                        <div>
                            <h3>Audi Supra TT</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae!</p>
                            <button type="button">I want This!</button>
                        </div>
                </Page>
            </Container>
        </>
    );
}

export default Home;

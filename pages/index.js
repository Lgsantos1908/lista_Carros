import { 
    Container, 
    Page,
    Butons,
    StyledButton 
} from '../styles/styles';
import { GlobalStyle } from '../styles/global';
import { useEffect, useRef, useState} from 'react';

function Home() {

const buttonRef = useRef(null);
    const [buttonPosition, setButtonPosition] = useState({top: 200, left: 200});
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const buffer = 20; // Buffer de distância entre o cursor e o botão

      if (
        cursorPosition.x > rect.left - buffer &&
        cursorPosition.x < rect.right + buffer &&
        cursorPosition.y > rect.top - buffer &&
        cursorPosition.y < rect.bottom + buffer

        
      ) {
        // Se o cursor estiver dentro do buffer, move o botão para uma nova posição aleatória
        const newTop = Math.random() * (window.innerHeight - rect.height);
        const newLeft = Math.random() * (window.innerWidth - rect.width);
        setButtonPosition({ top: newTop, left: newLeft });
      }
    }
  }, [cursorPosition]);
   

    return (
        <>
            <GlobalStyle/>
            <Container>
                <Page>
                    //<img src='https://pbs.twimg.com/media/Ea__31zWsAAwjDT.png' alt='Logo restaurante'/>
                    <img src='data:image/jpeg;base64,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' alt='Logo restaurante'/>
                    <h1>Olá, Chefe</h1>
                    <h2>Poderia considerar me conceder um aumento, por favor?</h2>
                    <Butons>
                        <button>CERTAMENTE! VOCÊ É MEU MELHOR COLABORADOR.</button>
                        <StyledButton  ref={buttonRef} top={buttonPosition.top} left={buttonPosition.left}>NÃO</StyledButton >
                        
                    </Butons>
                </Page>
            </Container>
        </>
    );
}

export default Home;

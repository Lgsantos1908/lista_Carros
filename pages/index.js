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

  const router = useRouter(); 

  const handleClink = () => {
    router.push('/page')
  }

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
                    
                    <img src='../imagens/picapau.jpg' alt='Logo restaurante'/>
                    <h1>Olá, Chefe</h1>
                    <h2>Poderia considerar me conceder um aumento, por favor?</h2>
                    <Butons>
                          <button onClick={handleClink}>CERTAMENTE! VOCÊ É MEU MELHOR COLABORADOR.</button>
                        <StyledButton  ref={buttonRef} top={buttonPosition.top} left={buttonPosition.left}>NÃO</StyledButton >
                        
                    </Butons>
                </Page>
            </Container>
        </>
    );
}

export default Home;

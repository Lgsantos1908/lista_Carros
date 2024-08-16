import { 
    Container, 
    Content, 
    HeaderMenu, 
    AboutUs, 
    Description 
} from '../styles/styles';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/global'; // Note que corrigi a importação aqui.

function Home() {
    const router = useRouter();

    const handleClick = () => {
        router.push(encodeURIComponent('/history'));
    };

    return (
    
        <GlobalStyle />
        <Container>    
            <HeaderMenu>
                <img src='https://github.com/Lgsantos1908/lista_Carros/blob/main/assets/images/capit%C3%A3o.jpg?raw=true' alt='Logo restaurante' />
                <h1>Capitão do sabor</h1>
            </HeaderMenu>
            <Content>
                <h1>Principais pratos</h1>
            </Content>
            <AboutUs>
                <Description>
                    <h1>Sobre nós</h1>
                    <p>
                        No pitoresco vilarejo costeiro, nasceu o Capitão do sabor, 
                        um restaurante de frutos do mar fundado pelo pescador visionário Antonio. Desde sua modesta inauguração,
                        o restaurante cresceu para se tornar um ícone gastronômico, celebrando a paixão pelo oceano e pela culinária. 
                        Com ingredientes frescos e uma equipe dedicada, o Capitão do sabor oferece uma experiência única, 
                        onde cada prato conta a história dos mares distantes e das tradições culinárias. Uma mistura irresistível de sabor, 
                        hospitalidade e inovação, este refúgio à beira-mar continua a encantar com suas criações exquisitas e ambiente acolhedor. 
                        Junte-se a nós nessa jornada culinária onde cada refeição é uma celebração do amor pelo oceano e pela arte da culinária.
                    </p>
                    <button onClick={handleClick}>
                        Nossa história...
                    </button>
                </Description>
                <img src='https://github.com/Lgsantos1908/lista_Carros/blob/main/assets/images/Restaurante.jpeg?raw=true' alt="Imagem do restaurante" />
            </AboutUs>
        </Container>
        
    );
}

export default Home;

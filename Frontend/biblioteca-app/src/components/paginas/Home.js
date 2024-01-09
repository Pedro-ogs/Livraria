import Accordion from 'react-bootstrap/Accordion';
import Image from '../../imagem/livraria.jpeg';

function Home() {
  return (
    <>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Bem-vindo ao LiteraHub</Accordion.Header>
            <Accordion.Body>
                Bem-vindo ao LiteraHub, o seu refúgio digital entre as páginas 
                encantadas da literatura! Nossa biblioteca online foi cuidadosamente 
                criada para proporcionar uma experiência única de imersão no mundo mágico dos livros.
                Imagine-se explorando corredores virtuais repletos de estantes 
                que abrigam tesouros literários de todas as eras e estilos. Seja você 
                um amante de clássicos atemporais, um entusiasta da ficção científica 
                futurista, ou um explorador das palavras contemporâneas mais inovadoras, 
                na LiteraHub, você encontrará o seu lugar.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>Como funcionamos</Accordion.Header>
            <Accordion.Body>
                O processo é simples e envolvente. Ao explorar nossa plataforma, 
                você encontrará uma seção especial para contribuir com novos títulos. 
                Basta adicionar o nome do livro e o preço pelo qual você deseja vendê-lo. 
                Dessa forma, você não apenas enriquece nossa biblioteca com suas escolhas 
                pessoais, mas também cria oportunidades para outros leitores explorarem novos
                mundos literários.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        
        <img src={Image} class="img-fluid" alt="Imagem da biblioteca"></img>
    </>
    
  );
}

export default Home;

/*
function Home(){
    return(
        <h1>Home</h1>
    );
}

export default Home;
*/
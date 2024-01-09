import { BrowserRouter, } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Container from "react-bootstrap/Container";

function BibliotecaInfo() {
  

  
  return (
    <div className="BibliotecaInfo">
      <Container>
          <Header/>
            <p>
            Na LiteraHub, a comunidade literária floresce. Autores renomados compartilham suas 
            histórias, participam de eventos exclusivos e interagem diretamente com os leitores. 
            Nossos clubes de leitura virtuais e fóruns de discussão oferecem espaços acolhedores 
            para explorar ideias, compartilhar insights e construir conexões com pessoas que 
            compartilham sua paixão pela palavra escrita.
            </p>
            <p>
            Estamos comprometidos em oferecer mais do que uma biblioteca; queremos ser o seu 
            destino literário, um lugar onde cada página virada seja uma aventura e cada livro 
            seja um amigo. Bem-vindo à LiteraHub, onde as histórias ganham vida e a magia da literatura está ao alcance de um clique.
            </p>
        
          <Footer/>
      </Container>
    </div>
  );
}

export default BibliotecaInfo;

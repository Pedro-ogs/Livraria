import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/paginas/Home";
import Container from "react-bootstrap/Container";
import BibliotecaList from "./components/paginas/biblioteca/BibliotecaList";
import BibliotecaIncluir from "./components/paginas/biblioteca/BibliotecaIncluir";
import BibliotecaAlterar from "./components/paginas/biblioteca/BibliotecaAlterar";
import BibliotecaInfo from "./components/paginas/biblioteca/BibliotecaInfo";

function App() {
  

  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Container>
          <Header/>

          <Routes>
            <Route exact path="" element={<Home/>}  />

            <Route path="/book" >
              <Route exact path="" element={<BibliotecaList/>}  />
              <Route exact path="list" element={<BibliotecaList/>}  />
              <Route exact path="incluir" element={<BibliotecaIncluir/>}  />
              <Route exact path="alterar/:id" element={<BibliotecaAlterar/>}  />
              <Route exact path="info" element={<BibliotecaInfo/>}  />
            </Route>

          </Routes>
        
          <Footer/>
        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

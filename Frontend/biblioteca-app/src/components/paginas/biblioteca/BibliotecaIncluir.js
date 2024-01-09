import {Link} from "react-router-dom";
import BookForm from "./BibliotecaForm";

function BookIncluir(){
    return(
        <>

            <h1>Adicionar um novo livro:</h1>
            <br/>
            <BookForm/>
        </>

    );
}

export default BookIncluir;

//<Link to={"/"}>Home</Link> / <Link to={"/book/list"}>Book Lista</Link> / Book Incluir
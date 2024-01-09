import {Link, useParams} from "react-router-dom";
import BookForm from "./BibliotecaForm";

function BookAlterar(){
    const {id} = useParams(); //Utilizado a partir da versao 6 do react-router.

    return(
        <>
            <Link to={"/"}>Home</Link> / <Link to={"/book/list"}>Book Lista</Link> / Book Alterar

            <h1>Alterar livro:</h1>
            <br/>
            <BookForm id={id}/>
        </>

    );
}

export default BookAlterar;
import {Button, Col, Form, Modal, Row, Stack, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import {useEffect, useState} from "react";
import BookApi from "../../api/bibliotecaApi";

function BookList(){

    const [show, setShow] = useState(false);
    const [idDelete, setIdDelete] = useState(false);
    const [bookList, setBookList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const bookApi = new BookApi();

    function handleShow(id) {
        setIdDelete(id);
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function handleExcluir() {
        setShow(false);
        bookApi.excluir(idDelete);
        console.log(`Excluido o book id: ${idDelete}`);
        consultarEPrecherTable();
    }

    function submitSearchBook(e) {
        e.preventDefault();
        consultarEPrecherTable();

    }

    useEffect(() => {
        consultarEPrecherTable();
    }, []);

    function consultarEPrecherTable(){
        if (searchText.trim().length > 0){
            bookApi.getBooksByText(setBookList, searchText);
        }else{
            bookApi.getBooks(setBookList);
        }
    }

    return(
        <>
            <Container>
                <br/>
                <Row>
                    <Col xl={10}>
                        <Form onSubmit={submitSearchBook}>
                            <Form.Group className="mb-3" controlId="searchText">
                                <Form.Control type="text" placeholder="Nome do livro" onChange={(e)=>setSearchText(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xl={2}>
                        <Link to="/book/incluir">
                            <Button>+</Button>
                        </Link>
                    </Col>
                </Row>
                <br/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="ms-auto">
                                            <Button variant="danger" size="sm" onClick={(e) =>handleShow(item.id)}>
                                                <BsFillTrashFill/>
                                            </Button>
                                        </div>
                                        <div className="">
                                            <Link to={`/book/alterar/${item.id}`}>
                                                <Button size="sm"><BsFillPencilFill/></Button>
                                            </Link>
                                        </div>
                                    </Stack>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmação</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Confirma a exclusao do livro {idDelete}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="danger" onClick={handleExcluir}>
                            Excluir
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default BookList;
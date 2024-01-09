import {Col, Row, Form, Button, Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import BookApi from "../../api/bibliotecaApi";

function BookForm({id}){

    const [nome, setNome] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    function setBook(book){
        setNome(book.nome);
        setPrice(book.price);
    }

    useEffect(() => {
        if(id){
            console.log("Consultar o livro pelo id: " + id);
            const bookApi = new BookApi();
            bookApi.getBook(setBook, id);
        }
    }, [id]);

    function cadastrarBook(e) {
        e.preventDefault();
        var book = {id: id, nome: nome, price: price};
        console.log(JSON.stringify(book));
        console.log("cadastrarBook exec.....");

        const bookApi = new BookApi();
        if (id){
            bookApi.alterarBook(book);
        }else{
            bookApi.incluirBook(book);
        }

        navigate(`/book/list`);
    }

    return(
        <Container>
            <Form onSubmit={cadastrarBook}>
                <Row>
                    <Col sm="6">
                        {id && (
                            <Form.Group as={Row} className="mb-3" controlId="id">
                                <Form.Label column sm="2">
                                    Id.
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={id} />
                                </Col>
                            </Form.Group>
                        )}

                        <Form.Group as={Row} className="mb-3" controlId="nome">
                            <Form.Label column sm="2">
                                Nome do livro
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Nome Book" defaultValue={nome} onChange={(e) => setNome(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="price">
                            <Form.Label column sm="2">
                                Preço
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Nome Price" defaultValue={price} onChange={(e) => setPrice(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <br/>


                        <Row className="justify-content-md-center">
                            <Col xl={12}>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">
                                        <Link to="/book/list">
                                            <Button variant="danger">
                                                Cancelar
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="p-2 ms-auto">
                                        <Button variant="primary" type="submit">
                                            Confirmar
                                        </Button>
                                    </div>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>

            {id} :
            {nome} :
            {price}
        </Container>
    );
}

export default BookForm;
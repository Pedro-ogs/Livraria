package com.pedro.bibliotecaApi.controller;

import com.pedro.bibliotecaApi.entity.Book;
import com.pedro.bibliotecaApi.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController() //Controller
@CrossOrigin
@RequestMapping("/api/v1/book")
public class BookController {

    private BookService bookService;
    //private Mapper mapper;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping()
    public ResponseEntity<Book> createBook(@RequestBody Book livro) throws Exception {
        Book newBook = bookService.createBook(livro);
        return new ResponseEntity<>(livro, HttpStatus.OK);
    }

    @PutMapping({"/{id}"})
    public ResponseEntity<Book> changeBook(@PathVariable Long id, @RequestBody Book livro) throws Exception {
        livro.setId(bookService.findBookById(id).getId());
        Book changedBook = bookService.updateProject(livro);
        return new ResponseEntity<>(changedBook, HttpStatus.OK);
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Book> deleteBook(@PathVariable Long id) throws Exception {
        Book changedBook = bookService.delete(id);
        return new ResponseEntity<>(changedBook, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAll() {
        List<Book> books = bookService.getAllBooks();
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Book> get(@PathVariable Long id) {
        Book book = bookService.findBookById(id);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }
}

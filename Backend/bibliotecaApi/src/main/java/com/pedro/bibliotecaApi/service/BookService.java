package com.pedro.bibliotecaApi.service;

import com.pedro.bibliotecaApi.entity.Book;
import com.pedro.bibliotecaApi.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repository;

    public void saveBook(Book book){
        this.repository.save(book);
    }
    
    public Book createBook(Book book) throws Exception{
        if(book == null)
            throw new Exception("Era esperado um objeto e foi passado null");
        this.saveBook(book);
        return book;
    }
    
    public Book updateProject(Book data) throws Exception{
        Book book = findBookById(data.getId());
        if(book != null){
            this.saveBook(data);
            return data;
        }
        throw new Exception("Erro ao atualizar o projeto");
    }

    public Book delete(Long id) throws Exception{
        Book entity = findBookById(id);
        this.repository.delete(entity);
        return entity;
    }

    public List<Book> getAllBooks(){
        List<Book> books = this.repository.findAll();
        return books;
    }
    
    public Book findBookById(Long id) throws EntityNotFoundException {
        return this.repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Livro não foi encontrado"));
    }
}

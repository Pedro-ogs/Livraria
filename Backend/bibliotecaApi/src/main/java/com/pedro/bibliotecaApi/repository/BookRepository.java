package com.pedro.bibliotecaApi.repository;

import com.pedro.bibliotecaApi.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

    Optional<Book> findById(Long id);

}
/*public interface BookRepository extends JpaRepository<Book, Long> {

    Optional<Book> findBooks(Long id);

}*/

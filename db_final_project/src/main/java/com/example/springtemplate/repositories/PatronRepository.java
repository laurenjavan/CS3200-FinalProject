package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Patron;
import com.example.springtemplate.models.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PatronRepository
        extends CrudRepository<Patron, Integer> {
    @Query(value = "SELECT * FROM patrons",
            nativeQuery = true)
    public List<Patron> findAllPatrons();
    @Query(value = "SELECT * FROM patrons WHERE pid=:pid",
            nativeQuery = true)
    public Patron findPatronById(@Param("pid") Integer pid);
}

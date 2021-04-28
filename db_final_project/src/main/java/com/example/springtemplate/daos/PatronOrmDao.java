package com.example.springtemplate.daos;

import com.example.springtemplate.models.Patron;
import com.example.springtemplate.repositories.PatronRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PatronOrmDao {
    @Autowired
    PatronRepository patronRepository;

    @PostMapping("/api/patrons")
    public Patron createPatron(@RequestBody Patron patron) {
        return patronRepository.save(patron);
    }
    
    @GetMapping("/api/patrons")
    public List<Patron> findAllPatrons() {
        return patronRepository.findAllPatrons();
    }
    
    @GetMapping("/api/patrons/{pid}")
    public Patron findPatronById(
            @PathVariable("pid") Integer pid) {
        return patronRepository.findPatronById(pid);
    }

    @PutMapping("/api/patrons/{pid}")
    public Patron updatePatron(
            @PathVariable("pid") Integer pid,
            @RequestBody() Patron newPatron) {
        Patron patron = this.findPatronById(pid);
        patron.setUsername(newPatron.getUsername());
        patron.setPassword(newPatron.getPassword());
        patron.setEmail(newPatron.getEmail());
        patron.setDateOfBirth(newPatron.getDateOfBirth());
        return patronRepository.save(patron);
    }
    
    @DeleteMapping("/api/patrons/{pid}")
    public void deletePatron(
            @PathVariable("pid") Integer pid) {
        patronRepository.deleteById(pid);
    }
}
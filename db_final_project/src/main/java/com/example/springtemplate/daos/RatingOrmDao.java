package com.example.springtemplate.daos;

import com.example.springtemplate.models.Rating;
import com.example.springtemplate.repositories.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RatingOrmDao {
    @Autowired
    RatingRepository ratingRepository;


    @PostMapping("/api/ratings")
    public Rating createRating(@RequestBody Rating rating) {
        return ratingRepository.save(rating);
    }
    
    @GetMapping("/api/ratings")
    public List<Rating> findAllRatings() {
        return (List<Rating>) ratingRepository.findAll();
    }
    
    @GetMapping("/api/ratings/{ratingId}")
    public Rating findRatingById(
            @PathVariable("ratingId") Integer id) {
        return ratingRepository.findRatingById(id);
    }

    @GetMapping("/api/ratings/restaurant/{rid}/ratings")
    public List<Rating> findRatingsForRestaurant(
            @PathVariable("rid") Integer rid) {
        return ratingRepository.findRatingsForRestaurant(rid);
    }

    @GetMapping("/api/ratings/patron/{pid}/ratings")
    public List<Rating> findRatingsForPatron(
            @PathVariable("pid") Integer pid) {
        return ratingRepository.findRatingsForPatron(pid);
    }

    @PutMapping("/api/ratings/{ratingId}")
    public Rating updateRating(
            @PathVariable("ratingId") Integer id,
            @RequestBody() Rating newRating) {
        Rating rating = this.findRatingById(id);
        rating.setScore(newRating.getScore());
        rating.setComment(newRating.getComment());
        rating.setCreated(newRating.getCreated());
        rating.setUpdated(newRating.getUpdated());
        return ratingRepository.save(rating);
    }

    @DeleteMapping("/api/ratings/{ratingId}")
    public void deleteRating(
            @PathVariable("ratingId") Integer id) {
        ratingRepository.deleteById(id);
    }

}
package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Rating;
import com.example.springtemplate.models.Patron;
import com.example.springtemplate.models.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingRepository
        extends CrudRepository<Rating, Integer> {
    @Query(value = "SELECT * FROM ratings",
            nativeQuery = true)
    public List<Rating> findAllRatings();
    @Query(value = "SELECT * FROM ratings WHERE id=:id",
            nativeQuery = true)
    public Rating findRatingById(@Param("id") Integer id);
    @Query(value = "SELECT * FROM ratings WHERE user_id=:userId", nativeQuery = true)
    public List<Rating> findRatingsForPatron(@Param("userId") Integer userId);
    @Query(value = "SELECT * FROM ratings WHERE restaurant_id=:restaurantId", nativeQuery = true)
    public List<Rating> findRatingsForRestaurant(@Param("restaurantId") Integer restaurantId);

}

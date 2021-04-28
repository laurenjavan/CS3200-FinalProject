package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Restaurant;
import com.example.springtemplate.models.Rating;
import com.example.springtemplate.models.Restaurant;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RestaurantRepository
        extends CrudRepository<Restaurant, Integer> {
    @Query(value = "SELECT * FROM restaurants",
            nativeQuery = true)
    public List<Restaurant> findAllRestaurants();

    @Query(value = "SELECT * FROM restaurants WHERE rid=:rid",
            nativeQuery = true)
    public Restaurant findRestaurantById(@Param("rid") Integer rid);

    @Query (value = "DELETE FROM restaurants WHERE rid=:rid",
            nativeQuery = true)
    public Restaurant deleteRestaurantById(@Param("rid") Integer rid);
}

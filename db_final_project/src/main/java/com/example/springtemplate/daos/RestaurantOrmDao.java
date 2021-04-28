package com.example.springtemplate.daos;

import com.example.springtemplate.models.Rating;
import com.example.springtemplate.models.Restaurant;
import com.example.springtemplate.repositories.RatingRepository;
import com.example.springtemplate.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RestaurantOrmDao {

    @Autowired
    RestaurantRepository restaurantRepository;

    @PostMapping("/api/restaurants")
    public Restaurant createRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }
    
    @GetMapping("/api/restaurants")
    public List<Restaurant> findAllRestaurants() {
        return restaurantRepository.findAllRestaurants();
    }
    
    @GetMapping("/api/restaurants/{rid}")
    public Restaurant findRestaurantById(
            @PathVariable("rid") Integer rid) {
        return restaurantRepository.findRestaurantById(rid);
    }

    @GetMapping("/api/update/restaurants/{rid}/{location}")
    public Restaurant updateRestaurant(
            @PathVariable("rid") Integer rid,
            @PathVariable("location") String newLocation) {
        Restaurant restaurant = this.findRestaurantById(rid);
        restaurant.setLocation(newLocation);
        return restaurantRepository.save(restaurant);
    }

    @PutMapping("/api/restaurants/{rid}")
    public Restaurant updateRestaurant(
            @PathVariable("rid") Integer rid,
            @RequestBody() Restaurant newRestaurant) {
        Restaurant restaurant = this.findRestaurantById(rid);
        restaurant.setLocation(newRestaurant.getLocation());
        return restaurantRepository.save(restaurant);
    }

    @DeleteMapping("/api/restaurants/{rid}")
    public void deleteRestaurant(
            @PathVariable("rid") Integer rid) {
        restaurantRepository.deleteById(rid);
    }
}
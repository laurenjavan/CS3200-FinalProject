# CS3200-FinalProject
Team Members: Lauren Javan, Juliann Liang, Addison Pedro
Section 3

This is a minimal viable product that is similar to how Yelp works where each Patron (user) is able to Rate a Restaurant. In order to create this restaurant rater, we have developed a web application that works with a mySQL database to keep track of ratings for a restaurant from all users. 

The typical users that may use our program is anyone who is passionate about food and creating an online community where people can share their restaurant experiences.

Domain Objects:
Ratings - An object of this class consists of the score, comment, and creation/update dates. It has two foreign keys, one for patron and one for restaurant.
Restaurants - An object of this class consists of name, location, and the cuisine of the restaurant. The cuisine is an enumerated type.

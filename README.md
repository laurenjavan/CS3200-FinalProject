# CS3200-FinalProject
Team Members: Lauren Javan, Juliann Liang, Addison Pedro
Section 3

Link to UML Drawing: https://lucid.app/lucidchart/invitations/accept/inv_7b2c6b6c-b044-488d-9a9c-3e2e4637047f?viewport_loc=255%2C-63%2C1474%2C1150%2CHWEp-vi-RSFO

**Overview**<br />
This is a minimal viable product that is similar to how Yelp works where each Patron (user) is able to Rate a Restaurant. In order to create this restaurant rater, we have developed a web application that works with a mySQL database to keep track of ratings for a restaurant from all users. 

**Users**<br />
The typical users that may use our program is anyone who is passionate about food and creating an online community where people can share their restaurant experiences. 

**Problem and Solution Statement**<br />
Choosing a meal can be difficult. Foodies are often curious of what to try next or trying to figure out should be their next meal. This database helps aggregate how Patrons rate a restaurant and showcase the Restaurant's ratings given by their Patrons. The database can be used in a global sense and be organized based on location so the user can best figure out what to eat and patrons can give their review anywhere.

**Domain Objects:**
- Ratings - An object of this class consists of the score, comment, and creation/update dates. It has two foreign keys, one for patron and one for restaurant.
- Restaurants - An object of this class consists of name, location, and the cuisine of the restaurant. The cuisine is an enumerated type.

*NOTE:*<br />
Please change the name of the schema, username, and password in application.properties under the resources folder. This connects to the SQL database and relies on that to make the webpage work. 

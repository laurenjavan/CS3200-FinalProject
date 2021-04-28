import restaurantService, {findAllRestaurants} from "./restaurant-service"

const {Link, useHistory} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const RestaurantList = () => {
    const history = useHistory()
    const [restaurants, setRestaurants] = useState([])
    useEffect(() => {
        findAllRestaurants()
    },[])
    const findAllRestaurants = () => {
        restaurantService.findAllRestaurants().then(restaurants => setRestaurants(restaurants))
    }
    return(
        <div>
            <h2>Restaurant List</h2>
            <button onClick={() => history.push("/restaurants/new")}>
                Add Restaurant
            </button>
            <ul className="list-group">
                {
                    restaurants.map(restaurant =>
                        <li key={restaurant.id}>
                            <Link to={`/restaurants/${restaurant.id}`}>
                                {restaurant.name},
                                {restaurant.location},
                                {restaurant.cuisine}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantList;
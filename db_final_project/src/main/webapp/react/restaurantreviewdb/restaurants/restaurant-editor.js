import restaurantService from "./restaurant-service"
import ratingService from "ratings/rating-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const RestaurantFormEditor = () => {
    const {id} = useParams()
    const [restaurant, setRestaurant] = useState({})
    useEffect(() => {
        if(id !=="new") {
            findRestaurantById(id)
        }
    }, []);
    const createRestaurant = (restaurant) => {
        restaurantService.createRestaurant(restaurant)
            .then(() => history.back())
    }
    const findRestaurantById = (id) => {
        restaurantService.findRestaurantById(id)
            .then(restaurant => setRestaurant(restaurant))
    }
    const deleteRestaurant = (id) => {
        restaurantService.deleteRestaurant(id)
            .then(() => history.back())
    }
    const updateRestaurant =(id, newRestaurant) => {
        restaurantService.updateRestaurant(id, newRestaurant)
            .then(() => history.back())
    }
    return (
        <div>
            <h2>Restaurant Editor</h2>
            <label>Id</label>
            <input className="form-control" value={restaurant.id}/><br/>
            <label>Name</label>
            <input className="form-control" onChange={(e) => setRestaurant(restaurant =>
                ({...restaurant, name: e.target.value}))} value={restaurant.name}/><br/>
            <label>Location</label>
            <input className="form-control" onChange={(e) => setRestaurant(restaurant =>
                ({...restaurant, location: e.target.value}))} value={restaurant.location}/><br/>
            <label>Cuisine</label>
            <input className="form-control" onChange={(e) => setRestaurant(restaurant =>
                ({...restaurant, cuisine: e.target.value}))} value={restaurant.cuisine}/><br/>

            <Link to={`/ratings/restaurant/${restaurant.id}/ratings`}>
                Ratings
            </Link>
            <br></br>
            <br></br>
            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateRestaurant(restaurant.id, restaurant)}>Save</button>
            <button className="btn btn-success" onClick={() => createRestaurant(restaurant)}>Create</button>
        </div>
    )
}

export default RestaurantFormEditor
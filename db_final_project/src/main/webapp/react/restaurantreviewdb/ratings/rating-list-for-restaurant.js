import ratingService from "./rating-service"

const { useState, useEffect } = React;
const { useParams, Link } = window.ReactRouterDOM;

const RatingListForRestaurant = () => {
    const {restaurantId} = useParams();
    const [ratings, setRatings] = useState([])
    useEffect(() => {
        console.log(restaurantId)
        findRatingsForRestaurant(restaurantId)
    }, [])
    const findRatingsForRestaurant = (restaurantId) => {
        ratingService.findRatingsForRestaurant(restaurantId)
            .then(ratings => setRatings(ratings))
    }
    return(
        <div>
            <h2>
                Ratings
            </h2>
            <ul className="list-group">
                {
                    ratings.map(rating =>
                        <li key={rating.id}>
                            <Link to={`/ratings/${rating.id}`}>
                                {rating.score},
                                {rating.comment},
                                {rating.created},
                                {rating.updated}
                            </Link>
                        </li>)
                }
            </ul>
            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
        </div>
    )
}

export default RatingListForRestaurant;
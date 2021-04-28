import ratingService, {findAllRatings, findRatingsForRestaurant, findRatingsForPatron} from "./rating-service"

const {Link, useHistory, useParams} = window.ReactRouterDOM;
const { useState, useEffect } = React;
const RatingList = () => {
    const history = useHistory()
    const [ratings, setRatings] = useState([])
    useEffect(() => {
        findAllRatings();
    },[])
    const findAllRatings = () => {
        ratingService.findAllRatings().then(ratings => setRatings(ratings))
    }
    return(
        <div>
            <h2>Restaurant Rating List</h2>
            <button onClick={() => history.push("/ratings/new")}>
                Add Rating
            </button>
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
        </div>
    )
}


export default RatingList;
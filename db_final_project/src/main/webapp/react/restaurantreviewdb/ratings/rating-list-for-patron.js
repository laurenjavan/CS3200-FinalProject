import ratingService, {findRatingsForPatron} from "./rating-service"

const { useState, useEffect } = React;
const { useParams, Link } = window.ReactRouterDOM;

const RatingListForPatron = () => {
    const {patronId} = useParams();
    const [ratings, setRatings] = useState([])
    useEffect(() => {
        findRatingsForPatron(patronId)
    }, [])
    const findRatingsForPatron = (patronId) => {
        ratingService.findRatingsForPatron(patronId)
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

export default RatingListForPatron;
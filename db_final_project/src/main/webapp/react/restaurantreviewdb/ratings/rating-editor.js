import ratingService from "./rating-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;

const RatingFormEditor = () => {
    const {id} = useParams()
    const [rating, setRating] = useState({})
    useEffect(() => {
        if(id !=="new") {
            findRatingById(id)
        }
    }, []);
    const createRating = (rating) => {
        ratingService.createRating(rating)
            .then(() => history.back())
    }
    const findRatingById = (id) => {
        ratingService.findRatingById(id)
            .then(rating => setRating(rating))
    }
    const deleteRating = (id) => {
        ratingService.deleteRating(id)
            .then(() => history.back())
    }
    const updateRating =(id, newRating) => {
        ratingService.updateRating(id, newRating)
            .then(() => history.back())
    }
    return (
        <div>
            <h2>Rating Editor</h2>
            <label>Id</label>
            <input className="form-control" value={rating.id}/><br/>
            <label>Score</label>
            <input className="form-control" onChange={(e) => setRating(rating =>
                ({...rating, score: e.target.value}))} value={rating.score}/><br/>
            <label>Comment</label>
            <input className="form-control" onChange={(e) => setRating(rating =>
                ({...rating, comment: e.target.value}))} value={rating.comment}/><br/>
            <label>Restaurant</label>
            <input className="form-control" onChange={(e) => setRating(rating =>
                ({...rating, restaurantId: e.target.value}))} value={rating.restaurantId}/><br/>
            <label>Patron</label>
            <input className="form-control" onChange={(e) => setRating(rating =>
                ({...rating, userId: e.target.value}))} value={rating.userId}/><br/>
            <label>Created</label>
            <input className="form-control" onChange={(e) => setRating(rating =>
                ({...rating, created: e.target.value}))} value={rating.created}/><br/>
            <label>Updated</label>
            <input className="form-control" onChange={(e) => setRating(rating =>
                ({...rating, updated: e.target.value}))} value={rating.updated}/><br/>

            <Link to={`/patrons/${rating.userId}`}>
                Patron ID: {rating.userId}
            </Link>
            <ul className="list-group">
                {
                    rating.patron && rating.patron.map(patron =>
                        <li className='list-group-item' key={patron.id}>
                            <Link to={`/patrons/${patron.id}`}>
                                {patron.id},
                                {patron.firstName},
                                {patron.lastName}
                            </Link>
                        </li>)
                }
            </ul>

            <Link to={`/restaurants/${rating.restaurantId}`}>
                Restaurant ID: {rating.restaurantId}
            </Link>
            <ul className="list-group">
                {
                    rating.restaurant && rating.restaurant.map(restaurant =>
                        <li className='list-group-item' key={restaurant.id}>
                            <Link to={`/restaurants/${restaurant.id}`}>
                                {restaurant.id},
                                {restaurant.name},
                                {restaurant.location},
                                {restaurant.cuisine}
                            </Link>
                        </li>)
                }
            </ul>

            <button className="btn btn-warning" onClick={() => {history.back();}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deleteRating(rating.id)}>Delete</button>
            <button className="btn btn-primary" onClick={() => updateRating(rating.id, rating)}>Save</button>
            <button className="btn btn-success" onClick={() => createRating(rating)}>Create</button>
        </div>
    )
}

export default RatingFormEditor
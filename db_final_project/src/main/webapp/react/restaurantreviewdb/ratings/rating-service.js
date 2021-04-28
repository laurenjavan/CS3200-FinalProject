
const RATINGS_URL = "http://localhost:8080/api/ratings"

export const findAllRatings = () => {
    return fetch(RATINGS_URL)
        .then((response) => {return response.json()})
}

export const findRatingById = (id) => {
    return fetch(`${RATINGS_URL}/${id}`)
        .then((response) => {return response.json()})
}

export const findRatingsForRestaurant = (restaurantId) => {
    return fetch(`${RATINGS_URL}/restaurant/${restaurantId}/ratings`)
        .then(response => response.json())
}

export const findRatingsForPatron = (userId) => {
    return fetch(`${RATINGS_URL}/patron/${userId}/ratings`)
        .then(response => response.json())
}

export const deleteRating = (id) => {
    return fetch(`${RATINGS_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createRating = (rating) => {
    return fetch(RATINGS_URL, {
        method: 'POST',
        body: JSON.stringify(rating),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export const updateRating = (id, rating) => {
    return fetch(`${RATINGS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(rating),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export default {
    findAllRatings,
    findRatingById,
    findRatingsForRestaurant,
    findRatingsForPatron,
    deleteRating,
    createRating,
    updateRating
}


const RESTAURANTS_URL = "http://localhost:8080/api/restaurants"

export const findAllRestaurants = () => {
    return fetch(RESTAURANTS_URL)
        .then((response) => {return response.json()})
}

export const findRestaurantById = (id) => {
    return fetch(`${RESTAURANTS_URL}/${id}`)
        .then((response) => {return response.json()})
}

export const deleteRestaurant = (id) => {
    return fetch(`${RESTAURANTS_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createRestaurant = (restaurant) => {
    return fetch(RESTAURANTS_URL, {
        method: 'POST',
        body: JSON.stringify(restaurant),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export const updateRestaurant = (id, restaurant) => {
    return fetch(`${RESTAURANTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(restaurant),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export default {
    findAllRestaurants,
    findRestaurantById,
    deleteRestaurant,
    createRestaurant,
    updateRestaurant
}

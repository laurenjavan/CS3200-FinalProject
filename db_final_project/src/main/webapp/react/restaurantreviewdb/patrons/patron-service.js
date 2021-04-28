const PATRONS_URL = "http://localhost:8080/api/patrons"

export const findAllPatrons = () => {
    return fetch(PATRONS_URL)
        .then((response) => {return response.json()})
}

export const findPatronById = (id) => {
    return fetch(`${PATRONS_URL}/${id}`)
        .then((response) => {return response.json()})
}

export const deletePatron = (id) => {
    return fetch(`${PATRONS_URL}/${id}`, {
        method: "DELETE"
    })
}

export const createPatron = (patron) => {
    return fetch(PATRONS_URL, {
        method: 'POST',
        body: JSON.stringify(patron),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export const updatePatron = (id, patron) => {
    return fetch(`${PATRONS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(patron),
        headers: {'content-type': 'application/json'}
    })
        .then((response) => {return response.json()})
}

export default {
    findAllPatrons,
    findPatronById,
    deletePatron,
    createPatron,
    updatePatron
}

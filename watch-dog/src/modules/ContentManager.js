import API_KEY from "../../src/.env"

const externalURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"

const remoteURL = "http://localhost:5002"

export default {
    getAllWatchList() {
        return fetch(`${remoteURL}/watchList`).then(result => result.json())
    },
    getAll() {
        return fetch(`${externalURL}/lookup?term=bojack`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "x-rapidapi-key": `32fe133781mshf106f6b4306814cp181799jsn39f4c2b75902`
            }
        })
        .then(result => result.json())
    }
}
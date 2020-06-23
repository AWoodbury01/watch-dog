const externalURL = "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"

const remoteURL = "http://localhost:5002"

export default {
    getAllWatchList() {
        return fetch(`${remoteURL}/watchList`).then(result => result.json())
    }
}
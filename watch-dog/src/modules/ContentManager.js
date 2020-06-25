import API_KEY from "../../src/APIKey";

const externalURL =
  "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com";

const remoteURL = "http://localhost:5002";

export default {
  getAllWatchList() {
    return fetch(`${remoteURL}/watchList`).then((result) => result.json());
  },
  deleteWatchListItem(id) {
    return fetch(`${remoteURL}/watchList/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },

  getAll() {
    return fetch(`${externalURL}/lookup?term=bojack`, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": `${API_KEY}`,
      },
    }).then((result) => result.json());
  },
  getAllMovies(id) {
    return fetch(`${externalURL}/lookup?term=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": `${API_KEY}`,
      },
    }).then((result) => result.json());
  },
  getAllProviders(id, provider) {
    return fetch(`${externalURL}/lookup?source_id=${id}&source=${provider}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host":
          "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": `${API_KEY}`,
      },
    }).then((result) => result.json());
  },
};

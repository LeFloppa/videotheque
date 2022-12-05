const monFilm = new URLSearchParams(window.location.search).get("id");
console.log(monFilm)
const urlFetchDetail = `http://localhost:3000/api/movies/${monFilm}`
const movieFetchDetail = fetch(urlFetchDetail);
let listfilm = document.getElementById("film")

movieFetchDetail
.then(function(res) {
if (res.ok) {
return res.json();
}
})
.then(function(data) {
    let movie = data
    listfilm.innerHTML = `
    <h1 class="text-center bg-light">${movie.title}</h1>
    `
})

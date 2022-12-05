/*<div class="movie_card col-lg-6 col-md-12 row-cols-sm-12">
<div class="info_section">
  <div class="movie_header">
    <img class="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
    <h1>Bright</h1>
    <h4>2017, David Ayer</h4>
    <span class="minutes">117 min</span>
    <p class="type">Action, Crime, Fantasy</p>
  </div>
  <div class="movie_desc">
    <p class="text">
      Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
    </p>
  </div>
</div>
<div class="blur_back bright_back"></div></div>*/

let listfilm = document.getElementById("listfilms")
const urlFetch = "http://localhost:3000/api/movies"
const movieFetch = fetch(urlFetch);
movieFetch
.then(function(res) {
if (res.ok) {
return res.json();
}
})
.then(function(data) {
  data.forEach(movie => {
    listfilm.innerHTML += `
    <div class="movie_card col-lg-6 col-md-12 row-cols-sm-12">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="${movie.bgUrl}"/>
        <h2>${movie.title}</h2>
        <h4>${movie.date}, ${movie.director}</h4>
        <span class="minutes">${movie.length} minutes</span>
        <p class="type">${movie.themes}</p>
      </div>
      <div class="movie_desc">
        <p class="text">${movie.description}</p>
      </div>
      <div class="movie_social">
      <ul>
        <li><a href="../fiche-details.html?id=${movie._id}">More Details</a></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </div>
    <div class="blur_back bright_back" style="background-image: url(${movie.imageUrl});"></div></div>
    `
})
});
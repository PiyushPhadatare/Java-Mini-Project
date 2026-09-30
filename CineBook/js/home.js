/* =========================================================
   CineBook — home.js
   index.html only: renders the featured movies grid and sets
   the hero banner from the top-rated movie in data.js.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderHeroBanner();
  renderFeaturedMovies();
});

function renderHeroBanner() {
  const heroBg = document.getElementById("heroBanner");
  if (!heroBg) return;

  // Feature whichever movie has the highest rating
  const featured = [...movies].sort((a, b) => b.rating - a.rating)[0];
  heroBg.src = featured.banner;
  heroBg.alt = `${featured.title} banner`;
}

function renderFeaturedMovies() {
  const grid = document.getElementById("featuredMoviesGrid");
  if (!grid) return;

  // Show up to 6 movies, highest rated first
  const featured = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  grid.innerHTML = featured.map(renderMovieCard).join("");
  bindMovieCardActions(grid);
}

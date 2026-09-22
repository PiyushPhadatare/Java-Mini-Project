/* =========================================================
   CineBook — movies.js
   movies.html only: renders the full catalog, builds genre
   filter buttons dynamically from the data, and applies a
   live search + genre filter together.
   ========================================================= */

let activeGenre = "All";
let searchTerm = "";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("moviesGrid");
  if (!grid) return; // safety check in case script loads elsewhere

  bindMovieCardActions(grid);
  renderGenreFilters();
  renderMoviesGrid();

  const searchInput = document.getElementById("movieSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim().toLowerCase();
      renderMoviesGrid();
    });
  }
});

function renderGenreFilters() {
  const filterBar = document.getElementById("genreFilters");
  if (!filterBar) return;

  // Build the unique genre list straight from the movie data
  const genreSet = new Set();
  movies.forEach((movie) => movie.genre.forEach((g) => genreSet.add(g)));
  const genres = ["All", ...Array.from(genreSet).sort()];

  filterBar.innerHTML = genres
    .map(
      (genre) => `
        <button type="button" class="pill${genre === activeGenre ? " is-active" : ""}" data-genre="${genre}">
          ${genre}
        </button>
      `
    )
    .join("");

  filterBar.addEventListener("click", (event) => {
    const btn = event.target.closest(".pill");
    if (!btn) return;

    activeGenre = btn.dataset.genre;
    filterBar.querySelectorAll(".pill").forEach((p) => {
      p.classList.toggle("is-active", p.dataset.genre === activeGenre);
    });
    renderMoviesGrid();
  });
}

function renderMoviesGrid() {
  const grid = document.getElementById("moviesGrid");
  const emptyState = document.getElementById("moviesEmptyState");
  const countLabel = document.getElementById("moviesCount");
  if (!grid) return;

  const filtered = movies.filter((movie) => {
    const matchesGenre = activeGenre === "All" || movie.genre.includes(activeGenre);
    const matchesSearch = searchTerm === "" || movie.title.toLowerCase().includes(searchTerm);
    return matchesGenre && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    grid.hidden = true;
    if (emptyState) emptyState.hidden = false;
    if (countLabel) countLabel.textContent = "No movies match your search.";
    return;
  }

  grid.hidden = false;
  if (emptyState) emptyState.hidden = true;
  grid.innerHTML = filtered.map(renderMovieCard).join("");

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${movies.length} movies`;
  }
}

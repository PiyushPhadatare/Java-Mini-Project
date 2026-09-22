/* =========================================================
   CineBook — movie-details.js
   movie-details.html only: loads the movie the user picked
   (saved in localStorage by common.js) and renders it. Shows
   a graceful fallback if no movie was selected.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const movie = getSelectedMovie();
  const content = document.getElementById("detailsContent");
  const emptyState = document.getElementById("detailsEmptyState");

  if (!movie) {
    if (content) content.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (content) content.hidden = false;

  renderMovieDetails(movie);

  const selectShowBtn = document.getElementById("selectShowBtn");
  if (selectShowBtn) {
    selectShowBtn.addEventListener("click", () => {
      // Movie is already saved in storage; just move on to show selection
      window.location.href = "shows.html";
    });
  }
});

function renderMovieDetails(movie) {
  document.title = `${movie.title} \u2014 CineBook`;

  setText("detailTitle", movie.title);
  setText("detailRating", `\u2605 ${movie.rating}`);
  setText("detailGenre", movie.genre.join(" \u2022 "));
  setText("detailMeta", `${movie.language} \u2022 ${movie.duration}`);
  setText("detailDescription", movie.description);
  setText("detailReleaseDate", formatDateDisplay(movie.releaseDate));

  const posterEl = document.getElementById("detailPoster");
  if (posterEl) {
    posterEl.src = movie.poster;
    posterEl.alt = `${movie.title} poster`;
  }

  const certBadge = document.getElementById("detailCertificate");
  if (certBadge) certBadge.textContent = movie.certificate;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

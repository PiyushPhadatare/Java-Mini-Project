/* =========================================================
   CineBook — shows.js
   shows.html only: lets the user pick a date, then lists
   every theater/time showing the selected movie on that date.
   ========================================================= */

let selectedDateIso = null;

document.addEventListener("DOMContentLoaded", () => {
  const movie = getSelectedMovie();
  const content = document.getElementById("showsContent");
  const emptyState = document.getElementById("showsEmptyState");

  if (!movie) {
    if (content) content.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (content) content.hidden = false;

  document.title = `Select Show \u2014 ${movie.title} \u2014 CineBook`;
  setText("showsMovieTitle", movie.title);
  setText("showsMovieMeta", `${movie.genre.join(", ")} \u2022 ${movie.language} \u2022 ${movie.duration}`);

  selectedDateIso = availableDates[0].iso;
  renderDatePills(movie.id);
  renderTheaterList(movie.id);
});

function renderDatePills(movieId) {
  const wrap = document.getElementById("datePills");
  if (!wrap) return;

  wrap.innerHTML = availableDates
    .map(
      (d) => `
        <button type="button" class="date-pill${d.iso === selectedDateIso ? " is-active" : ""}" data-iso="${d.iso}">
          <span>${formatDateLabel(d.iso)}</span>
          <span>${formatDateShort(d.iso)}</span>
        </button>
      `
    )
    .join("");

  wrap.addEventListener("click", (event) => {
    const btn = event.target.closest(".date-pill");
    if (!btn) return;

    selectedDateIso = btn.dataset.iso;
    wrap.querySelectorAll(".date-pill").forEach((p) => {
      p.classList.toggle("is-active", p.dataset.iso === selectedDateIso);
    });
    renderTheaterList(movieId);
  });
}

function renderTheaterList(movieId) {
  const list = document.getElementById("theaterList");
  const noShowsMsg = document.getElementById("noShowsMessage");
  if (!list) return;

  // Group the matching shows by theater so each theater renders once
  const matchingShows = shows.filter(
    (s) => s.movieId === movieId && s.date === selectedDateIso
  );

  if (matchingShows.length === 0) {
    list.innerHTML = "";
    if (noShowsMsg) noShowsMsg.hidden = false;
    return;
  }

  if (noShowsMsg) noShowsMsg.hidden = true;

  const theaterGroups = {};
  matchingShows.forEach((s) => {
    if (!theaterGroups[s.theaterId]) {
      theaterGroups[s.theaterId] = {
        theater: s.theater,
        location: s.location,
        screen: s.screen,
        shows: []
      };
    }
    theaterGroups[s.theaterId].shows.push(s);
  });

  list.innerHTML = Object.values(theaterGroups)
    .map(
      (group) => `
        <div class="theater-block">
          <div class="theater-block__header">
            <h3>${group.theater} \u2014 ${group.location}</h3>
            <span class="theater-block__screen">${group.screen}</span>
          </div>
          <div class="time-slot-group">
            ${group.shows
              .map(
                (s) => `<button type="button" class="time-slot-btn" data-show-id="${s.id}">${s.time}</button>`
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");

  list.querySelectorAll(".time-slot-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const show = shows.find((s) => s.id === Number(btn.dataset.showId));
      if (!show) return;
      saveSelectedShow(show);
      window.location.href = "seats.html";
    });
  });
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

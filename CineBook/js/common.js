/* =========================================================
   CineBook — common.js
   Shared across every page: navigation (active link + mobile
   menu), formatting helpers, the toast notification, and the
   reusable movie-card markup used by both home.js and
   movies.js.
   ========================================================= */

/* ---------- Navigation ---------- */
function initNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav a[data-page]");

  navLinks.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("is-active");
    } else {
      link.classList.remove("is-active");
    }
  });

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the mobile menu once a link is chosen
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

/* ---------- Formatting helpers ---------- */
function formatCurrency(amount) {
  return "\u20B9" + Number(amount).toLocaleString("en-IN");
}

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// "2026-09-22" -> "22 Sep 2026"
function formatDateDisplay(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
}

// "2026-09-22" -> "22 Sep"
function formatDateShort(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;
}

// "2026-09-22" -> "Today" / "Tomorrow" / "Thu"
function formatDateLabel(isoDate) {
  const todayIso = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowIso = tomorrow.toISOString().slice(0, 10);

  if (isoDate === todayIso) return "Today";
  if (isoDate === tomorrowIso) return "Tomorrow";

  const d = new Date(isoDate + "T00:00:00");
  return WEEKDAY_NAMES[d.getDay()];
}

/* ---------- Toast notification ---------- */
let toastTimer = null;

function showToast(message, type) {
  let toast = document.getElementById("cinebookToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cinebookToast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.toggle("toast--error", type === "error");
  toast.classList.add("is-visible");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);
}

/* ---------- Movie card (shared by home.js and movies.js) ---------- */
function renderMovieCard(movie) {
  return `
    <article class="movie-card" data-id="${movie.id}">
      <div class="movie-card__poster">
        <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy">
        <span class="rating-badge">\u2605 ${movie.rating}</span>
      </div>
      <div class="movie-card__body">
        <h3 class="movie-card__title">${movie.title}</h3>
        <p class="movie-card__meta">${movie.genre.join(", ")} \u2022 ${movie.language}</p>
        <p class="movie-card__meta movie-card__meta--muted">${movie.duration}</p>
        <div class="movie-card__actions">
          <button type="button" class="btn btn-outline btn-sm view-details-btn" data-id="${movie.id}">View Details</button>
          <button type="button" class="btn btn-primary btn-sm book-now-btn" data-id="${movie.id}">Book Now</button>
        </div>
      </div>
    </article>
  `;
}

// Delegated click handling for every card rendered inside containerEl.
// "View Details" -> movie-details.html, "Book Now" -> shows.html.
function bindMovieCardActions(containerEl) {
  containerEl.addEventListener("click", (event) => {
    const detailsBtn = event.target.closest(".view-details-btn");
    const bookBtn = event.target.closest(".book-now-btn");
    const targetBtn = detailsBtn || bookBtn;

    if (!targetBtn) return;

    const movieId = Number(targetBtn.dataset.id);
    const movie = movies.find((m) => m.id === movieId);
    if (!movie) return;

    saveSelectedMovie(movie);
    window.location.href = detailsBtn ? "movie-details.html" : "shows.html";
  });
}

document.addEventListener("DOMContentLoaded", initNavigation);

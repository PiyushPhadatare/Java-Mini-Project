/* =========================================================
   CineBook — storage.js
   Every localStorage read/write for the whole app goes
   through this file, so the key names only live in one
   place. Nothing here touches the DOM.
   ========================================================= */

const STORAGE_KEYS = {
  MOVIE: "cinebook_selected_movie",
  SHOW: "cinebook_selected_show",
  SEATS: "cinebook_selected_seats",
  BOOKING: "cinebook_current_booking",
  HISTORY: "cinebook_booking_history"
};

/* ---------- Selected movie ---------- */
function saveSelectedMovie(movie) {
  localStorage.setItem(STORAGE_KEYS.MOVIE, JSON.stringify(movie));
}

function getSelectedMovie() {
  const data = localStorage.getItem(STORAGE_KEYS.MOVIE);
  return data ? JSON.parse(data) : null;
}

/* ---------- Selected show ---------- */
function saveSelectedShow(show) {
  localStorage.setItem(STORAGE_KEYS.SHOW, JSON.stringify(show));
}

function getSelectedShow() {
  const data = localStorage.getItem(STORAGE_KEYS.SHOW);
  return data ? JSON.parse(data) : null;
}

/* ---------- Selected seats ---------- */
function saveSelectedSeats(seats) {
  localStorage.setItem(STORAGE_KEYS.SEATS, JSON.stringify(seats));
}

function getSelectedSeats() {
  const data = localStorage.getItem(STORAGE_KEYS.SEATS);
  return data ? JSON.parse(data) : [];
}

/* ---------- Current booking (most recent confirmation) ---------- */
function saveCurrentBooking(booking) {
  localStorage.setItem(STORAGE_KEYS.BOOKING, JSON.stringify(booking));
}

function getCurrentBooking() {
  const data = localStorage.getItem(STORAGE_KEYS.BOOKING);
  return data ? JSON.parse(data) : null;
}

/* ---------- Booking history ---------- */
function getBookingHistory() {
  const data = localStorage.getItem(STORAGE_KEYS.HISTORY);
  return data ? JSON.parse(data) : [];
}

function addBookingToHistory(booking) {
  const history = getBookingHistory();
  history.unshift(booking); // most recent booking first
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
}

/* ---------- Cleanup after a completed booking ----------
   Clears the in-progress selection (movie/show/seats) once a
   booking has been confirmed, while keeping the booking and
   the history intact. */
function clearBookingFlow() {
  localStorage.removeItem(STORAGE_KEYS.MOVIE);
  localStorage.removeItem(STORAGE_KEYS.SHOW);
  localStorage.removeItem(STORAGE_KEYS.SEATS);
}

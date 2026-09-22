/* =========================================================
   CineBook — seats.js
   seats.html only: the main interactive feature. Generates
   the seat grid from seatConfig (data.js), handles seat
   clicks, enforces the 6-seat maximum, and keeps the booking
   summary in sync with no page reload.
   ========================================================= */

let currentSeats = []; // every seat object for this show
let selectedSeats = []; // subset currently selected by the user

document.addEventListener("DOMContentLoaded", () => {
  const movie = getSelectedMovie();
  const show = getSelectedShow();
  const content = document.getElementById("seatsContent");
  const emptyState = document.getElementById("seatsEmptyState");
  const emptyMessage = document.getElementById("seatsEmptyMessage");

  if (!movie) {
    showSeatsEmptyState(content, emptyState, emptyMessage, "Movie information is unavailable.");
    return;
  }

  if (!show) {
    showSeatsEmptyState(content, emptyState, emptyMessage, "Please select a show.");
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (content) content.hidden = false;

  document.title = `Select Seats \u2014 ${movie.title} \u2014 CineBook`;
  setText("seatsMovieTitle", movie.title);
  setText("seatsTheaterInfo", `${show.theater} \u2022 ${show.screen}`);
  setText("seatsShowInfo", `${formatDateShort(show.date)} \u2022 ${show.time}`);

  currentSeats = generateSeats(show.id);
  selectedSeats = [];

  renderSeatGrid();
  updateSummary();

  const continueBtn = document.getElementById("continueBtn");
  if (continueBtn) {
    continueBtn.addEventListener("click", handleContinue);
  }
});

function showSeatsEmptyState(content, emptyState, emptyMessage, message) {
  if (content) content.hidden = true;
  if (emptyState) emptyState.hidden = false;
  if (emptyMessage) emptyMessage.textContent = message;
}

/* ---------- Seat generation ---------- */
// Deterministic "already booked" check so the same show always
// shows the same booked seats (roughly 1 in 9 seats).
function isSeatBooked(showId, seatId) {
  const str = String(showId) + seatId;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 97;
  }
  return hash % 9 === 0;
}

function generateSeats(showId) {
  const seats = [];
  seatConfig.rowTypes.forEach((rowInfo) => {
    for (let number = 1; number <= seatConfig.seatsPerRow; number++) {
      const id = rowInfo.row + number;
      seats.push({
        id: id,
        row: rowInfo.row,
        number: number,
        type: rowInfo.type,
        price: seatConfig.prices[rowInfo.type],
        status: isSeatBooked(showId, id) ? "booked" : "available"
      });
    }
  });
  return seats;
}

/* ---------- Rendering ---------- */
function renderSeatGrid() {
  const grid = document.getElementById("seatGrid");
  if (!grid) return;

  const rows = seatConfig.rowTypes.map((r) => r.row);

  grid.innerHTML = rows
    .map((row) => {
      const rowSeats = currentSeats.filter((s) => s.row === row);
      const seatButtons = rowSeats
        .map((seat) => {
          const afterAisle = seat.number === seatConfig.aisleAfterSeat;
          const seatHtml = `
            <button type="button"
              class="seat seat--${seat.type} seat--${seat.status}"
              data-id="${seat.id}"
              aria-label="Seat ${seat.id}, ${seat.type}, ${seat.status}">
              ${seat.number}
            </button>
          `;
          return afterAisle ? seatHtml + `<span class="seat-row__aisle"></span>` : seatHtml;
        })
        .join("");

      return `
        <div class="seat-row">
          <span class="seat-row__label">${row}</span>
          <span class="seat-row__seats">${seatButtons}</span>
          <span class="seat-row__label">${row}</span>
        </div>
      `;
    })
    .join("");

  grid.addEventListener("click", handleSeatClick);
}

/* ---------- Interaction ---------- */
function handleSeatClick(event) {
  const btn = event.target.closest(".seat");
  if (!btn) return;

  const seatId = btn.dataset.id;
  const seat = currentSeats.find((s) => s.id === seatId);
  if (!seat) return;

  if (seat.status === "booked") {
    showToast("This seat is already booked.", "error");
    return;
  }

  if (seat.status === "available") {
    if (selectedSeats.length >= seatConfig.maxSeatsPerBooking) {
      showToast(`You can select a maximum of ${seatConfig.maxSeatsPerBooking} seats.`, "error");
      return;
    }
    seat.status = "selected";
    selectedSeats.push(seat);
  } else if (seat.status === "selected") {
    seat.status = "available";
    selectedSeats = selectedSeats.filter((s) => s.id !== seatId);
  }

  btn.className = `seat seat--${seat.type} seat--${seat.status}`;
  btn.setAttribute("aria-label", `Seat ${seat.id}, ${seat.type}, ${seat.status}`);
  updateSummary();
}

function updateSummary() {
  const sorted = [...selectedSeats].sort((a, b) =>
    a.row === b.row ? a.number - b.number : a.row.localeCompare(b.row)
  );

  const subtotal = sorted.reduce((sum, seat) => sum + seat.price, 0);
  const fee = sorted.length > 0 ? seatConfig.convenienceFee : 0;
  const total = subtotal + fee;

  setText("summarySeats", sorted.length > 0 ? sorted.map((s) => s.id).join(", ") : "\u2014");
  setText("summaryCount", String(sorted.length));
  setText("summarySubtotal", formatCurrency(subtotal));
  setText("summaryFee", formatCurrency(fee));
  setText("summaryTotal", formatCurrency(total));

  const continueBtn = document.getElementById("continueBtn");
  if (continueBtn) {
    continueBtn.textContent = total > 0 ? `Continue \u2022 ${formatCurrency(total)}` : "Continue";
  }
}

function handleContinue() {
  if (selectedSeats.length === 0) {
    showToast("Please select at least one seat.", "error");
    return;
  }
  saveSelectedSeats(selectedSeats);
  window.location.href = "checkout.html";
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

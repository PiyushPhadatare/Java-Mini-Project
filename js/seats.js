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

  currentSeats = generateSeats(show.id, movie);
  selectedSeats = [];

  renderSeatGrid(movie);
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

/* ---------- Movie Price Resolver ---------- */
function getMoviePrices(movie) {
  if (movie) {
    if (movie.prices) return movie.prices;
    if (typeof movies !== "undefined" && Array.isArray(movies)) {
      const found = movies.find((m) => m.id === movie.id);
      if (found && found.prices) return found.prices;
    }
  }
  return seatConfig.prices;
}

/* ---------- Seat generation ---------- */
// Returns true if a seat is taken by a non-cancelled booking OR by the
// deterministic "pre-booked" formula (so the grid always looks occupied).
function isSeatBooked(showId, seatId) {
  // 1. Check real bookings in localStorage — skip cancelled ones
  const history = getBookingHistory();
  for (const booking of history) {
    if (
      booking.status !== "cancelled" &&
      String(booking.showId) === String(showId) &&
      Array.isArray(booking.seats) &&
      booking.seats.includes(seatId)
    ) {
      return true;
    }
  }

  // 2. Fallback deterministic formula (~1 in 9 seats "pre-booked")
  const str = String(showId) + seatId;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 97;
  }
  return hash % 9 === 0;
}


function generateSeats(showId, movie) {
  const prices = getMoviePrices(movie);
  const seats = [];
  seatConfig.rowTypes.forEach((rowInfo) => {
    for (let number = 1; number <= seatConfig.seatsPerRow; number++) {
      const id = rowInfo.row + number;
      seats.push({
        id: id,
        row: rowInfo.row,
        number: number,
        type: rowInfo.type,
        price: prices[rowInfo.type] || seatConfig.prices[rowInfo.type],
        status: isSeatBooked(showId, id) ? "booked" : "available"
      });
    }
  });
  return seats;
}

/* ---------- Rendering ---------- */
function renderSeatGrid(movie) {
  const grid = document.getElementById("seatGrid");
  if (!grid) return;

  // Tier display config: order top-to-bottom (cheapest first = furthest from screen)
  const tierLabels = {
    regular:   "NORMAL",
    executive: "EXECUTIVE",
    premium:   "PREMIUM",
    recliner:  "RECLINER"
  };

  const prices = getMoviePrices(movie);
  let html = "";
  let lastType = null;

  seatConfig.rowTypes.forEach((rowInfo) => {
    // Inject a section header whenever the type changes
    if (rowInfo.type !== lastType) {
      const price = prices[rowInfo.type] || seatConfig.prices[rowInfo.type];
      html += `
        <div class="seat-tier-header">
          <span class="seat-tier-header__price">Rs.${price}</span>
          <span class="seat-tier-header__label">${tierLabels[rowInfo.type]}</span>
        </div>
      `;
      lastType = rowInfo.type;
    }

    const rowSeats = currentSeats.filter((s) => s.row === rowInfo.row);
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

    html += `
      <div class="seat-row">
        <span class="seat-row__label">${rowInfo.row}</span>
        <span class="seat-row__seats">${seatButtons}</span>
        <span class="seat-row__label">${rowInfo.row}</span>
      </div>
    `;
  });

  grid.innerHTML = html;
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

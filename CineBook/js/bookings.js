/* =========================================================
   CineBook — bookings.js
   my-bookings.html only: renders the booking history stored
   in localStorage, newest first, with an empty state when
   there is nothing booked yet.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const history = getBookingHistory();
  const list = document.getElementById("bookingsList");
  const emptyState = document.getElementById("bookingsEmptyState");

  if (!list) return;

  if (history.length === 0) {
    list.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  list.hidden = false;

  list.innerHTML = history.map(renderBookingCard).join("");

  list.addEventListener("click", (event) => {
    const btn = event.target.closest(".view-booking-btn");
    if (!btn) return;

    const booking = history.find((b) => b.bookingId === btn.dataset.bookingId);
    if (!booking) return;

    saveCurrentBooking(booking);
    window.location.href = "confirmation.html";
  });
});

function renderBookingCard(booking) {
  return `
    <article class="booking-card">
      <div class="booking-card__main">
        <h3>${booking.movieTitle}</h3>
        <p class="booking-card__meta">${booking.theater} \u2022 ${booking.screen}</p>
        <p class="booking-card__meta">${formatDateShort(booking.date)} \u2022 ${booking.time}</p>
        <p class="booking-card__meta">Seats: ${booking.seats.join(", ")}</p>
        <p class="booking-card__meta">Booking ID: ${booking.bookingId}</p>
      </div>
      <div class="booking-card__side">
        <span class="booking-card__amount">${formatCurrency(booking.totalAmount)}</span>
        <button type="button" class="btn btn-outline btn-sm view-booking-btn" data-booking-id="${booking.bookingId}">View Details</button>
      </div>
    </article>
  `;
}

/* =========================================================
   CineBook — bookings.js
   my-bookings.html only: renders the booking history stored
   in localStorage, newest first, with an empty state when
   there is nothing booked yet. Includes cancel-ticket logic.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderBookingsList();
});

function renderBookingsList() {
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
    // View Details
    const viewBtn = event.target.closest(".view-booking-btn");
    if (viewBtn) {
      const booking = history.find((b) => b.bookingId === viewBtn.dataset.bookingId);
      if (!booking) return;
      saveCurrentBooking(booking);
      window.location.href = "confirmation.html";
      return;
    }

    // Cancel Ticket
    const cancelBtn = event.target.closest(".cancel-booking-btn");
    if (cancelBtn) {
      const bookingId = cancelBtn.dataset.bookingId;
      const confirmed = confirm(
        "Are you sure you want to cancel this ticket? This cannot be undone and the seats will be released."
      );
      if (!confirmed) return;

      cancelBooking(bookingId);
      showToast("Ticket cancelled — seats have been released.", "success");

      // Re-render list in place
      setTimeout(() => renderBookingsList(), 300);
    }
  });
}

function renderBookingCard(booking) {
  const isCancelled = booking.status === "cancelled";

  return `
    <article class="booking-card${isCancelled ? " booking-card--cancelled" : ""}">
      <div class="booking-card__main">
        <h3>${booking.movieTitle}${isCancelled ? ' <span class="booking-badge booking-badge--cancelled">Cancelled</span>' : ' <span class="booking-badge booking-badge--active">Active</span>'}</h3>
        <p class="booking-card__meta">${booking.theater} \u2022 ${booking.screen}</p>
        <p class="booking-card__meta">${formatDateShort(booking.date)} \u2022 ${booking.time}</p>
        <p class="booking-card__meta">Seats: ${booking.seats.join(", ")}</p>
        <p class="booking-card__meta">Booking ID: ${booking.bookingId}</p>
      </div>
      <div class="booking-card__side">
        <span class="booking-card__amount">${formatCurrency(booking.totalAmount)}</span>
        <button type="button" class="btn btn-outline btn-sm view-booking-btn" data-booking-id="${booking.bookingId}">View Details</button>
        ${!isCancelled
          ? `<button type="button" class="btn btn-sm cancel-booking-btn" data-booking-id="${booking.bookingId}" style="background:var(--color-accent-soft);color:var(--color-accent);border:1px solid var(--color-accent);margin-top:6px;">Cancel Ticket</button>`
          : ""}
      </div>
    </article>
  `;
}


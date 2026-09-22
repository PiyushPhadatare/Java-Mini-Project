/* =========================================================
   CineBook — confirmation.js
   confirmation.html only: renders the most recent booking.
   Also reused by "View Details" on my-bookings.html, which
   sets cinebook_current_booking before navigating here.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const booking = getCurrentBooking();
  const content = document.getElementById("confirmationContent");
  const emptyState = document.getElementById("confirmationEmptyState");

  if (!booking) {
    if (content) content.hidden = true;
    if (emptyState) emptyState.hidden = false;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (content) content.hidden = false;

  setText("confBookingId", booking.bookingId);
  setText("confMovie", booking.movieTitle);
  setText("confTheater", booking.theater);
  setText("confScreen", booking.screen);
  setText("confDateTime", `${formatDateShort(booking.date)} \u2022 ${booking.time}`);
  setText("confSeats", booking.seats.join(", "));
  setText("confTotal", formatCurrency(booking.totalAmount));
});

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

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

  // Show cancelled state if this booking was cancelled
  const isCancelled = booking.status === "cancelled";
  const banner = document.getElementById("confCancelledBanner");
  const icon   = document.getElementById("confIcon");
  const heading = document.getElementById("confHeading");
  const subtitle = document.getElementById("confSubtitle");

  if (isCancelled) {
    if (banner)  banner.hidden = false;
    if (icon)    icon.textContent = "✕";
    if (icon)    icon.style.background = "var(--color-accent-soft)";
    if (icon)    icon.style.color = "var(--color-accent)";
    if (heading) heading.textContent = "Ticket Cancelled";
    if (subtitle) subtitle.textContent = "This booking has been cancelled and the seats have been released.";
  }

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

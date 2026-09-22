/* =========================================================
   CineBook — checkout.js
   checkout.html only: shows the final order summary, validates
   the payment method, simulates a payment, then creates and
   stores the booking before moving to confirmation.html.
   ========================================================= */

let checkoutTotal = 0;

document.addEventListener("DOMContentLoaded", () => {
  const movie = getSelectedMovie();
  const show = getSelectedShow();
  const seats = getSelectedSeats();

  const content = document.getElementById("checkoutContent");
  const emptyState = document.getElementById("checkoutEmptyState");
  const emptyMessage = document.getElementById("checkoutEmptyMessage");

  let missingMessage = null;
  if (!movie) missingMessage = "Movie information is unavailable.";
  else if (!show) missingMessage = "Please select a show.";
  else if (!seats || seats.length === 0) missingMessage = "Please select at least one seat.";

  if (missingMessage) {
    if (content) content.hidden = true;
    if (emptyState) emptyState.hidden = false;
    if (emptyMessage) emptyMessage.textContent = missingMessage;
    return;
  }

  if (emptyState) emptyState.hidden = true;
  if (content) content.hidden = false;

  renderOrderSummary(movie, show, seats);

  const payBtn = document.getElementById("payBtn");
  if (payBtn) {
    payBtn.addEventListener("click", () => handlePayment(movie, show, seats));
  }
});

function renderOrderSummary(movie, show, seats) {
  setText("checkoutMovie", movie.title);
  setText("checkoutTheater", show.theater);
  setText("checkoutScreen", show.screen);
  setText("checkoutDate", formatDateDisplay(show.date));
  setText("checkoutTime", show.time);
  setText("checkoutSeats", seats.map((s) => s.id).join(", "));

  const subtotal = seats.reduce((sum, seat) => sum + seat.price, 0);
  const fee = seatConfig.convenienceFee;
  checkoutTotal = subtotal + fee;

  setText("checkoutSubtotal", formatCurrency(subtotal));
  setText("checkoutFee", formatCurrency(fee));
  setText("checkoutTotal", formatCurrency(checkoutTotal));

  const payBtn = document.getElementById("payBtn");
  if (payBtn) {
    payBtn.querySelector(".pay-btn__label").textContent = `Pay ${formatCurrency(checkoutTotal)}`;
  }
}

function getSelectedPaymentMethod() {
  const checked = document.querySelector('input[name="paymentMethod"]:checked');
  return checked ? checked.value : null;
}

function handlePayment(movie, show, seats) {
  const method = getSelectedPaymentMethod();

  if (!method) {
    showToast("Please select a payment method.", "error");
    return;
  }

  const payBtn = document.getElementById("payBtn");
  payBtn.classList.add("is-processing");
  payBtn.disabled = true;
  payBtn.querySelector(".pay-btn__label").textContent = "Processing payment...";

  // Simulate a payment gateway round-trip. No real payment service is contacted.
  setTimeout(() => {
    showToast("Payment successful!");
    const booking = createBooking(movie, show, seats, method);
    addBookingToHistory(booking);
    saveCurrentBooking(booking);
    clearBookingFlow();

    setTimeout(() => {
      window.location.href = "confirmation.html";
    }, 700);
  }, 1300);
}

function createBooking(movie, show, seats, method) {
  return {
    bookingId: "CB" + Date.now().toString().slice(-8),
    movieId: movie.id,
    movieTitle: movie.title,
    theater: show.theater,
    screen: show.screen,
    date: show.date,
    time: show.time,
    seats: seats.map((s) => s.id),
    paymentMethod: method,
    totalAmount: checkoutTotal,
    bookingDate: new Date().toISOString()
  };
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

/* =========================================================
   CineBook — auth.js
   Client-side authentication using localStorage.
   Provides login / logout / session management and
   route guards for protected pages.
   ========================================================= */

const AUTH_KEY = 'cinebook_user';

/* ---------- Demo accounts ----------
   In a real app these would be on a server. For this
   college project we keep them in-code. */
const DEMO_USERS = [
  { id: 1, name: 'Piyush Phadatare', email: 'piyush@cinebook.com', password: 'piyush123', avatar: 'PP' },
  { id: 2, name: 'Demo User',        email: 'demo@cinebook.com',   password: 'demo123',   avatar: 'DU' },
  { id: 3, name: 'Admin',            email: 'admin@cinebook.com',  password: 'admin123',  avatar: 'AD' }
];

/* ---------- Session helpers ---------- */
function getCurrentUser() {
  const raw = localStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function loginUser(email, password) {
  const storedUsers = JSON.parse(localStorage.getItem('cinebook_registered_users') || '[]');
  const allUsers = [...DEMO_USERS, ...storedUsers];
  const found = allUsers.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!found) return { success: false, message: 'Incorrect email or password.' };

  const session = { id: found.id, name: found.name, email: found.email, avatar: found.avatar };
  localStorage.setItem(AUTH_KEY, JSON.stringify(session));
  return { success: true, user: session };
}

function logoutUser() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'index.html';
}

/* ---------- Route guard ----------
   Call at the top of any protected page.
   If not logged in, redirect to login.html?redirect=<current page>. */
function requireAuth() {
  if (!isLoggedIn()) {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    window.location.href = `login.html?redirect=${encodeURIComponent(current)}`;
  }
}

/* ---------- Dynamic header ----------
   Updates the header-actions area on every page based on
   login state. Call after DOMContentLoaded. */
function renderAuthHeader() {
  const actionsEl = document.querySelector('.header-actions');
  if (!actionsEl) return;

  const user = getCurrentUser();

  // Remove any existing auth button injected by a previous call
  actionsEl.querySelectorAll('.auth-header-btn, .user-menu-wrap').forEach(el => el.remove());

  if (user) {
    // Logged in: show avatar + name + logout button
    const wrap = document.createElement('div');
    wrap.className = 'user-menu-wrap';
    wrap.innerHTML = `
      <button type="button" class="user-avatar-btn" id="userMenuToggle" aria-expanded="false" aria-haspopup="true">
        <span class="user-avatar">${user.avatar}</span>
        <span class="user-name">${user.name.split(' ')[0]}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="user-menu" id="userMenu" hidden>
        <div class="user-menu__info">
          <strong>${user.name}</strong>
          <span>${user.email}</span>
        </div>
        <a href="my-bookings.html" class="user-menu__link">My Bookings</a>
        <button type="button" class="user-menu__link user-menu__logout" id="logoutBtn">Logout</button>
      </div>
    `;
    actionsEl.appendChild(wrap);

    const toggle = wrap.querySelector('#userMenuToggle');
    const menu   = wrap.querySelector('#userMenu');
    toggle.addEventListener('click', () => {
      const open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    wrap.querySelector('#logoutBtn').addEventListener('click', logoutUser);

  } else {
    // Not logged in: show Login button
    const btn = document.createElement('a');
    btn.href = `login.html?redirect=${encodeURIComponent(window.location.pathname.split('/').pop() || 'index.html')}`;
    btn.className = 'btn btn-primary btn-sm auth-header-btn';
    btn.textContent = 'Login / Sign Up';
    actionsEl.appendChild(btn);
  }
}

document.addEventListener('DOMContentLoaded', renderAuthHeader);

// main.js — the only JavaScript on the site, and it's optional.
// Everything else (filtering, toggles) is pure HTML/CSS.

// keep the footer year current
document.querySelectorAll("#year").forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

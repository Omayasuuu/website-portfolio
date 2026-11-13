const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('show');
  const isOpen = navLinks.classList.contains('show');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('visitorName').value.trim();
  const email = document.getElementById('visitorEmail').value.trim();
  const message = document.getElementById('visitorMessage').value.trim();
  const recipient = 'your.email@example.com'; // Change this to your real email address.

  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent('From: ' + name + '\nEmail: ' + email + '\n\n' + message);

  window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
});
const themeToggle = document.getElementById("themeToggle");

// Check the saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀";
}

// Switch themes
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "☾";
        localStorage.setItem("theme", "light");
    }

});
// Afghan Trails interactive features
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");

// Feature 1: responsive mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

// Close the mobile menu after choosing a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Feature 2: dark/light theme switch
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkModeOn = document.body.classList.contains("dark");
  themeToggle.textContent = darkModeOn ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light theme" : "Switch to dark theme");
});

// Feature 3: contact form validation and success feedback
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("formStatus").textContent = "";

  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Please enter at least 2 characters.";
    valid = false;
  }
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    valid = false;
  }
  if (message.length < 10) {
    document.getElementById("messageError").textContent = "Your message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formStatus").textContent =
      "Thank you, " + name + "! Your message passed validation.";
    contactForm.reset();
  }
});

// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();

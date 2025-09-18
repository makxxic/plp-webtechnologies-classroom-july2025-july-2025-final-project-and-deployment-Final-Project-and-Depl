// Simple client-side form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageEl = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = " Please fill in all fields.";
      messageEl.style.color = "red";
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      messageEl.textContent = " Please enter a valid email.";
      messageEl.style.color = "red";
      return;
    }

    messageEl.textContent = " Thank you for reaching out! I’ll reply soon.";
    messageEl.style.color = "green";
    form.reset();
  });
});

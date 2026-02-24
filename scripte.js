function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Formulaire avec envoi sur Formspree
const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  })
    .then(response => {
      if (response.ok) {
        success.textContent = "Message envoyé avec succès ✅";
        form.reset();
      } else {
        success.textContent = "Erreur lors de l'envoi. Réessaye plus tard ❌";
      }
    })
    .catch(error => {
      success.textContent = "Erreur lors de l'envoi. Réessaye plus tard ❌";
    });
});
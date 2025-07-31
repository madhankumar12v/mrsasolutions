document.addEventListener('DOMContentLoaded', function () {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwVva8h3BoQJlwFIYEiRXKL-Sv4gb4hcXQ2BSl8vDJODwl6bTNAOQUQNRrvjj5yVjsooA/exec';
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name-field").value,
      email: document.getElementById("email-field").value,
      subject: document.getElementById("subject-field").value,
      message: document.getElementById("message-field").value
    };

    document.querySelector(".loading").style.display = "block";

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(function (response) {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".sent-message").style.display = "block";
        form.reset();
      })
      .catch(function (error) {
        document.querySelector(".loading").style.display = "none";
        document.querySelector(".error-message").textContent = "Failed to send message!";
        document.querySelector(".error-message").style.display = "block";
      });
  });
});

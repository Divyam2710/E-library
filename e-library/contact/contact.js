document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent traditional form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
        this.reset(); // Reset the form
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

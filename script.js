document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form berhasil dikirim!");
            window.location.href = "index.html";
        });
    }
});

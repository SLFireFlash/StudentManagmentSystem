const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", function() {
        var element = document.body;
        if (darkModeToggle.checked) {
            element.setAttribute("data-bs-theme","dark");
        } else {
            element.setAttribute("data-bs-theme","light");
          }
});

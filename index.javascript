document.addEventListener('DOMContentLoaded', function () {
    // Select the theme toggle button
    const themeToggleButton = document.getElementById('theme-toggle');

    // Check if dark mode is saved in localStorage and apply the theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Event listener for toggling dark/light mode
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the user's theme preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing effect for "Welcome to My Portfolio"
    let i = 0;
    const text = "Welcome to My Portfolio";
    const speed = 100;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("headline").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});

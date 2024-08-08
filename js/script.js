document.addEventListener('DOMContentLoaded', function () {
    const darkModeOn = document.getElementById('darkmode-on');
    const darkModeOff = document.getElementById('darkmode-off');

    darkModeOn.addEventListener('click', function () {
        document.body.classList.add('dark-mode'); // Activate dark mode
        darkModeOn.style.display = 'none';
        darkModeOff.style.display = 'inline';
    });

    darkModeOff.addEventListener('click', function () {
        document.body.classList.remove('dark-mode'); // Deactivate dark mode
        darkModeOff.style.display = 'none';
        darkModeOn.style.display = 'inline';
    });
});
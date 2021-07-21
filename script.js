window.addEventListener('DOMContentLoaded', function () {
    const animateTitle = document.querySelector('.title-welcome');

    function changeClass() {
        if (animateTitle) {
            animateTitle.classList.toggle('active');
        }
    }
    changeClass();
});
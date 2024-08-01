document.addEventListener('DOMContentLoaded', function () {
    const aboutCard = document.querySelector('.about-card');
    const aboutDetails = document.querySelector('.about-details');

    aboutCard.addEventListener('click', function () {
        if (aboutDetails.style.display === 'none' || aboutDetails.style.display === '') {
            aboutDetails.style.display = 'block';
        } else {
            aboutDetails.style.display = 'none';
        }
    });
});
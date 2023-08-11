const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const verticalCarousel = document.querySelector('.vertical-carousel');

upButton.addEventListener('click', () => {
    if (verticalCarousel.scrollTop == 0) {
        verticalCarousel.scrollTop = 520
    }
    else verticalCarousel.scrollTop -= 200;

});

downButton.addEventListener('click', () => {
    if (verticalCarousel.scrollTop == 520) {
        verticalCarousel.scrollTop = 0
    }
    else verticalCarousel.scrollTop += 200;

});
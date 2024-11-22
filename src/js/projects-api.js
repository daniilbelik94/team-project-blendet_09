`use strict`;

document.addEventListener("DOMContentLoaded", () => {
const loadMoreButton = document.querySelector(".load-more");
const projectItems = document.querySelectorAll(".project-item[hidden]");
const card = document.querySelector('.project-item:not([hidden])');
let currentIndex = 0;
const itemsToShow = 3;

loadMoreButton.addEventListener("click", ()=> {
    for( let i = currentIndex; i < currentIndex + itemsToShow && i < projectItems.length; i++){
        projectItems[i].removeAttribute("hidden");
    };

    currentIndex += itemsToShow;
    
    if (card) {
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: cardHeight,
            behavior: 'smooth'
        });
    }
    
    loadMoreButton.blur();

    if(currentIndex >= projectItems.length){
        loadMoreButton.style.display = `none`;
    };
});
});
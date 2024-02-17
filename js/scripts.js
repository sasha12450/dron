const listItem = document.getElementById('listItem');
const button = listItem.querySelector('.accordion-button');
const content = listItem.querySelector('.accordion-content');
const image = listItem.querySelector('.buttonImage');

let isContentVisible = false;

button.addEventListener('click', function() {
    // Переключаем отображение содержимого
    isContentVisible = !isContentVisible;
    
    if (isContentVisible) {
        content.style.maxHeight = content.scrollHeight + "px";
        image.src = '../img/carbon_close-outline.png';
    } else {
        content.style.maxHeight = 0;
        image.src = '../img/List.png';
    }
});




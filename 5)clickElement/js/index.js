function toggleElements() {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach(element => {
        if(element.style.display === 'block'){
            element.style.display = 'none';
        }
        else{
            element.style.display = 'block';
        }
    });
}
function debounce(fn, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}
const button = document.getElementById("toggle-elements-button");
button.addEventListener("click", debounce(toggleElements, 1000));
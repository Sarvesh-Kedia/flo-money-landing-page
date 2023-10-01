let cardElement = document.querySelector('#card');
console.log(cardElement)

document.addEventListener("mousemove", (e) => {
    rotateElement(e, cardElement);
});

function rotateElement(event, element) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x,y)

}
const cardElement = document.querySelector('#card');



if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    addEventListener("touchmove", (e) => {
        rotateElement(e.touches[0], cardElement);
    });
} 
else {
    // false for not mobile device
    document.addEventListener("mousemove", (e) => {
        rotateElement(e, cardElement);
    });
    
}


function rotateElement(event, element) {
    
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
  
    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
  
    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;

  
    // set rotation
    const yAmount = -1*offsetY;
    const xAmount = offsetX;

    // console.log(xAmount, yAmount)

    element.style.transform = 'perspective(1000px) rotateX(' + xAmount + 'deg) rotateY(' + yAmount + 'deg) rotateZ(0deg)';
}



function fromZeroToOne() {
    const carZero_3 = document.querySelector('.car-zero-3');
    const carZero_5 = document.querySelector('.car-zero-5');

    carZero_3.style.animation = "car-zero-3-out 5s ease-in"
    carZero_5.style.animation = "car-zero-3-out 5s ease-in"
    
    setTimeout(() => {
        carZero_3.style.visibility = "hidden"
        carZero_5.style.visibility = "hidden"
    }, 4500)
}


fromZeroToOne()
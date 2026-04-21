function enterGarage() {

    let carCounter = 0;
    const maxCars = 20;

    while (carCounter < maxCars) {
        carCounter += 1;
        window.alert("Car Number "+ carCounter +" is entering");
        break;
}
    if (carCounter >= maxCars) {
        window.alert("Garage is full");
    }
}

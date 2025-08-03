class CustomerDetails {
  printFirstName(firstName) {
    console.log(firstName);
  }
}

export { CustomerDetails }; // Exporting the class

class Car {
  printCarName(carName) {
    console.log(carName);
  }
}

export const car = new Car(); // Exporting an instance of the Car class

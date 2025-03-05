const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    
    getCarInfo() {
      return `${this.brand} ${this.model} - ${this.year}`;
    }
  };
  
  console.log(car.getCarInfo()); // Output: "Toyota Camry - 2022"
  
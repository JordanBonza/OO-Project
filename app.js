//Part One

class Vehicle
{
    constructor (make,model,year)
    {
        if(!Number.isInteger(year))
        {
            throw new Error ('Year ${year} is not numeric');
        }
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk()
    {
        return "Beep.";
    }
    toString()
    {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."
myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."


//Part Two

class Car extends Vehicle 
{
    numWheels = 4;
}


let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4


//Part Three

class Motorcycle extends Vehicle 
{
    numWheels = 2;
    revEngine() 
    {
        return "VROOM!!!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

myFirstMotorcycle.toString();
// "The vehicle is a Honda Nighthawk from 2000."

myFirstMotorcycle.honk();     // "Beep."
myFirstMotorcycle.revEngine(); // "VROOM!!!"
myFirstMotorcycle.numWheels;  // 2


//Part Four
class Garage
{
    constructor (capacity)
    {
        if(!Number.isFinite(capacity))
        {
            throw new Error('Invalid entry')
        }
        this.vehicles = [];
        this.capacity = capacity;
    }
    
    add(newVehicle)
    {
        if(!(newVehicle instanceof Vehicle))
       {
           return "Only vehicles are allowed in here!";
       }
       if (this.vehicles.length >= this.capacity)
       {
           return "Sorry, we're full.";
       }
       this.vehicles.push(newVehicle);
       return "Vehicle added!";
    }
}

// class Garage {
//     constructor(capacity) {
//       this.vehicles = [];
//       this.capacity = capacity;
//     }
  
//     add(newVehicle) {
//       if (!(newVehicle instanceof Vehicle)) {
//         return "Only vehicles are allowed in here!";
//       }
//       if (this.vehicles.length >= this.capacity) {
//         return "Sorry, we're full.";
//       }
//       this.vehicles.push(newVehicle);
//       return "Vehicle added!";
//     }
//   }

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."
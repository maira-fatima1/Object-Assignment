#!/usr/bin/env node
part1: ("\n\tEmployee Data\n");
const employee = {
    name: "Maira",
    department: "Governer House",
    role: "Engineer",
    skill: ["coding expert"],
    contact: {
        phone: 6457890,
        email: "mairafatima92242@gmail.com"
    },
};
console.log(employee);
part2: ("\n\tCar Details\n");
const Car = {
    engine: {
        horsePower: 4000,
    },
    getHorsePower: () => {
        console.log(Car.engine.horsePower);
    },
};
Car.getHorsePower();
part3: ("\n\tColorful T-Shirt\n");
let Tshirt = {
    name: "Nike",
    price: 2000,
    color: "Orange",
    inventory: {
        stock: 20,
        colorOptions: ["white", "blue", "black", "orange", "red"]
    },
    changeColor: (newColor) => {
        return newColor;
    }
};
let myShirt = {
    name: "puma",
    price: 5000,
    color: "white",
    inventory: {
        stock: 60,
        colorOptions: ["white", "skyblue", "pink", "orange", "red"]
    },
    changeColor: (newColor) => {
        if (newColor = "Orange") {
            Tshirt.price = Tshirt.price + (Tshirt.price * 7 / 100);
        }
        else if (newColor = "blue") {
            Tshirt.price = Tshirt.price + (Tshirt.price * 5 / 100);
        }
        return newColor;
    }
};
Tshirt.changeColor("pink");
console.log(Tshirt.price);
Tshirt.changeColor("blue");
console.log(Tshirt.price);
export {};

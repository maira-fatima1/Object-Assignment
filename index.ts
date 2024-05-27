#!/usr/bin/env node

import inquirer from "inquirer";

part1:("\n\tEmployee Data\n");

//Challange.no:1
//1. Design a type alias named Employee to represent an employee object with
// properties like name (string), department (string), and role (string).
//2. Include an optional nested object named contact to hold phone and email 
//information (if provided).
//3. Employ a union type for the role property to restrict it to "Manager", 
//"Engineer", or "Intern".
//4. Make the skills property an optional array of strings for listing an employee's 
//skills (if any)

type Employee = {
  name:string,
  department:string,
  contact?:
  {
    phone:number,
    email:string,
  },
  
  
  role: "Manager" | "Engineer" | "Intern",
  skill:string[],
};

const employee: Employee = {
  name:"Maira",
  department:"Governer House",
  role:"Engineer",
  skill:["coding expert"],
  contact:
  {
    phone: 6457890,
    email:"mairafatima92242@gmail.com"
  },
};


console.log(employee);

part2:("\n\tCar Details\n");
//challenge.no:2
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower

type Car ={
  engine:{
    horsePower:number;
  },
  
  getHorsePower:() => void
}; 
const Car : Car ={
  engine:
  {
    horsePower:4000, 
  },
  getHorsePower:()  => {
    console.log(Car.engine.horsePower);
    
  },
  
};
Car.getHorsePower()

part3:("\n\tColorful T-Shirt\n")

// Challenge.no:3
// 1. Design a type alias named Product to represent a T-shirt object with properties
// like name (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue)

type Product = 
{
  name: string,
  price: number,
  color: string,
  inventory:{
    stock: number, 
    colorOptions?:string[]
  },
  changeColor: (newColor:string)=> any
};
let Tshirt: Product = {
  name:"Nike",
  price: 2000,
  color: "Orange",
  inventory:{
    stock: 20,
    colorOptions:["white","blue","black","orange","red"]
  },
  changeColor:(newColor:string)=>{
    return newColor
  }
  }
  let myShirt: Product = {
    name:"puma",
    price: 5000,
    color: "white",
    inventory:{
      stock: 60,
      colorOptions:["white","skyblue","pink","orange","red"]
    },
    changeColor:(newColor:string)=>{
      if(newColor = "Orange"){
        Tshirt.price = Tshirt.price+(Tshirt.price * 7/100)
      }
      else if (newColor = "blue"){
        Tshirt.price = Tshirt.price+ (Tshirt.price *5/100)
        
      }
      return newColor
    }
  }
Tshirt.changeColor("pink")
console.log(Tshirt.price);
Tshirt.changeColor("blue")
console.log(Tshirt.price);

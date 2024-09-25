/*
Michael Kellems
Date
CIT 215
Prof. Kane
*/

const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

function showInfo() {
    let number = parseInt(document.querySelector('#petNum').value)
    console.log(number)
    let display = document.querySelector('.selectedPetInfo')
    let pet = petsData[number-1]
    console.log(pet.petName)
    display.innerHTML = `${pet.petName} is ${pet.age} years old. This animal weighs ${pet.weightInKilos} kilograms and is a ${pet.breed}.` 
}
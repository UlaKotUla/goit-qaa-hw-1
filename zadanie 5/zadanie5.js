function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

const numbers = [1,2,3,4];
const numbersDoubleNumber = numbers.map(number => number*2);
console.log(numbers)
console.log(numbersDoubleNumber)


const students = [
    {name: "Aleksandra", mark: 5},
    {name: "Kacper", mark: 4},
    {name: "Aneta", mark: 4},
    {name: "Tomasz", mark: 5},
    {name: "Karolina", mark: 3},
];
const names=students.map(student => student.name);
console.log(names);



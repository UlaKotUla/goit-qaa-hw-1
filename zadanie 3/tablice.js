function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}


const fruits = ['Jabłko', 'Banan', 'Pomarańcza', 'Winogrona', 'Arbuz'];


const numbers = [2, 3, 4, 7, 10, 13, 17, 22];

for (let i = 0; i > numbers.length; i += 1) {
    if (numbers[i] > 5) {
        console.log(numbers[i])
    }
}
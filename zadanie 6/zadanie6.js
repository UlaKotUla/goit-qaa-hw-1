
//Słowo kluczowe this w JavaScript odnosi się do obiektu, w kontekście którego wywołano funkcję. Może ono wskazywać na różne obiekty w zależności od miejsca i sposobów wywołania funkcji. Poza jakąkolwiek funkcją, this odnosi się do globalnego obiektu. W przeglądarkach internetowych jest to obiekt window. W standardowej funkcji this określa się poprzez sposób wywołania tej funkcji. Jeśli funkcja jest wywoływana jako metoda obiektu, this wskazuje na ten obiekt.
// przykład

// const person = {
// name: 'Antek',
// greet: function() {
// console.log('Cześć, jestem ' + this.name);
// }
// };
// person.greet(); // Wyświetla: "Cześć, jestem Antek"

// przykład 2 (funkcja strzałkowa - dziedziczy kontekst z otaczającego zakresu, bo jest powiązana leksykalnie)

// const person = {
// name: 'Jan',
// greet: () => {
// console.log('Cześć, jestem ' + this.name);
// }
// };
// person.greet(); // W przeglądarce wyświetli: "Cześć, jestem ", ponieważ `this` wskazuje na globalny obiekt window




//this odwołuje się do obiektu username

const person = {
    username: "Maciej",
    showName() {
        console.log(this.username);
    }
};
person.showName();

// getAuthors i addAuthor to metody obiektu (zwracająca tablicę autorów na półce oraz dodająca autora do półki), this odwołuje się do obiektu authors

const bookShelf = {
    authors: ["Aleksander Kowalski", "Eliza Orzeszkowa", "Anna Dębowska"],
    getAuthors() {
        return this.authors;
    },
    addAuthor(authorName) {
        this.authors.push(authorName);
    }
};
console.log(bookShelf.getAuthors());
bookShelf.addAuthor("Alojzy Nienacki", "Ewa Nałkowska", "Edward Miszczyński");
console.log(bookShelf.getAuthors());
const authorList = bookShelf.getAuthors();
console.log(authorList);

// zamiana stringu w formie json na obiekt w JS

const json = '{"name":"Mango","age":3,"isHappy":true}'
const obj = JSON.parse(json);
console.log(json);

// parsowanie nieprawidłowego ciągu json 

const invalidJson = '{{"name":"Mango","age":3,"isHappy":true}}';
try {
    const obj = JSON.parse(invalidJson);
    console.log(obj);
} catch(error) {
    console.error("Name:", error.name);
    console.error("Message:", error.message);
}
console.log('Kod działa mimo wystąpienia błędu')

const body = document.querySelector('body');

const newRequest = new XMLHttpRequest();

newRequest.addEventListener('load', function() {
    console.log("It worked!");
    const data = JSON.parse(this.responseText);
    for (let planet of data.results) {
        const h1 = document.createElement("h1");
        h1.append(`${planet.name}`);
        body.appendChild(h1);
    }
});

newRequest.addEventListener('error', () => {
    console.log("Error!");
});

newRequest.open('GET', 'https://swapi.dev/api/planets/');
newRequest.send();
console.log("Request sent!");
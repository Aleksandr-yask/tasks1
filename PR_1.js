const data = request();
console.log(data);


function request() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'test.json', false);
    xhr.send();
    if (xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    }
}
const xhr = new XMLHttpRequest();
const url = "url";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
const data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
xhr.send(data);
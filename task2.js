async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const users = await fetch(url);
    const data = await users.json();
    return data;
}

function showCity(userName, users) {
    const correctUser = users.find((user) => {
        return user.name === userName;
    });
    const city = correctUser.address.city ? correctUser.address.city : "Not Found";
    const cityElement = document.getElementById("userCity");
    cityElement.innerHTML = city;
}

function getUserCity() {
    const nameInput = document.getElementById("userNameInput");
    const userNameValue = nameInput.value;
    getUsers()
        .then((data) => {
            showCity(userNameValue, data);
        });

    nameInput.value = "";
}


const getUsrBtn = document.getElementById("getUserButton");
getUsrBtn.addEventListener("click", getUserCity);
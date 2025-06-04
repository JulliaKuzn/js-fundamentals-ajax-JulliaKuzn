async function getUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

function showUsers(users) {
    const usersContainer = document.querySelector(".usersList");
    users.forEach((user) => {
        const userElement = document.createElement("li");
        usersContainer.appendChild(userElement);
        userElement.textContent = user.name;
    });

}

getUsers()
    .then((usersList) => {
        showUsers(usersList);
    })
    .catch((error) => {
        console.error("Error during fetch users", error);
    });
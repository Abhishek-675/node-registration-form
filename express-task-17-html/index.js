var userName = document.querySelector("#name");
var age = document.querySelector('#age');
var email = document.querySelector("#email");
var form = document.querySelector("#form");

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    let user = {
        name: userName.value,
        age: age.value,
        email: email.value
    };

    axios.post("http://localhost:3000/add-users", user)
        .then((response) => {
            console.log(response);
        })
        .catch(err => console.log(err));

    showUser(user);
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get("http://localhost:3000/get-users")
        .then((response) => {
            console.log(response.data);
            for (var i = 0; i < response.data.length; i++) {
                showUser(response.data[i])
            };
        })
        .catch(error => console.log(error));
});

function showUser(user) {
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    const parentNode = document.getElementById('listOfUsers');
    const childHTML = `<li id=${user.id}> Name: ${user.name}, Email: ${user.email}, Age: ${user.age} 
                        <button onclick=deleteUser(${user.id})> Delete User </button>
                        
                        </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
    // console.log(user.id);
    // <button onclick=editUser(${user.id}, ${user.name}, ${user.age}, ${user.email})> Edit User </button>
}

// function editUser(id, email, name, age) {
//     // console.log(id);
//     document.getElementById('email').value = email;
//     document.getElementById('name').value = name;
//     document.getElementById('age').value = age;

//     deleteUser(id);
// }

function deleteUser(id) {
    // console.log(id);
    axios.delete(`http://localhost:3000/delete-users/${id}`)
        .then((response) => {
            console.log(response);
            removeUserFromScreen(id);
        })
        .catch(error => console.log(error));
}

function removeUserFromScreen(id) {
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(id);

    parentNode.removeChild(childNodeToBeDeleted);
}


"use strict"
async function getUsers(page) {
    try {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await response.json();
        if (data && data.data && Array.isArray(data.data)) {
            const sortedUsers = data.data.sort((a, b) => {
                if (a.first_name < b.first_name) {
                    return -1;
                } else if (a.first_name > b.first_name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            renderUsers(sortedUsers, page);
        } else {
            console.error('Incorrect data format');
        }
    } catch (error) {
        console.error(error);
    }
}

function renderUsers(users, page) {
    const usersContainer = document.querySelector('.users-container');
    usersContainer.innerHTML = '';
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<strong>${user.first_name} ${user.last_name}</strong>`;
        usersContainer.appendChild(userDiv);
    }

    const paginationContainer = document.querySelector('.pagination-container');
    paginationContainer.innerHTML = '';
    const prevPage = page - 1 > 0 ? page - 1 : 1;
    const nextPage = page + 1;
    paginationContainer.innerHTML = `<a href="#" onclick="getUsers(${prevPage})">Previous</a> <a href="#" onclick="getUsers(${nextPage})">Next</a>`;
}

getUsers(1);
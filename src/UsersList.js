class UsersList {
    constructor() {
        this.init();
        this.listElement = document.createElement('ul');
        this.listElement.classList.add('users-list');
    }

    async init() {
        this.users = await this.fetchUsers();
        this.createList();
    }

    async fetchUsers(){ 
        let response = await fetch('https://jsonplaceholder.typicode.com/users/');
        return await response.json();
    }

    createList() {
        for (let user of this.users) {
            let li = this.createUser(user);
            this.listElement.appendChild(li);
        }
    }

    onUserSelected(user) {
        selectedUserService.setSelectedUser(user);
    }

    createUser(userData) {
        let li = document.createElement('li');
        li.addEventListener('click', () => this.onUserSelected(userData));
        let user = new User(userData);
        li.innerHTML = user.html;
        return li;
    }
}
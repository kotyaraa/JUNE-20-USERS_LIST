class UsersApp {
    constructor() {
        this.element = document.createElement('main');
        this.element.classList.add('main-app');
        this.createUsers();
        this.createPosts();

        document.body.appendChild(this.element);
    }

    createUsers() {
        let usersList = new UsersList();
        this.element.appendChild(usersList.listElement);
    }

    createPosts() {
        let postsList = new PostsList();
        this.element.appendChild(postsList.element);
    }
}
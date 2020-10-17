class SelectedUserService {
    constructor() {

    }

    setSelectedUser(user) {
        this.user = user;
        // fetch posts
        this.callbackFn();
    }

    onUserChanged(callbackFn) {
        // fetch posts
        this.callbackFn = callbackFn;
    }
}

let selectedUserService = new SelectedUserService();


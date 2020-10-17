class User {
    constructor({ email, name, address ,userId }) {
        this.displayUser(email, name, address)
        this.id = userId
        
    }
    async fetchPosts(){
        let user = selectedUserService.user;
        let response = await fetch('https://jsonplaceholder.typicode.com/users/' + user.id +'/posts');
        return response.json();
    }
    

    displayUser(email, name, address) {
        let {street, city} = address;
        this.html = `
        <div class="user">
            <h2>${name}</h2>
            <strong>${email}</strong>
            <dl>
                <dt>City</dt>
                <dd>${city}</dd>
                <dt>Street</dt>
                <dd>${street}</dd>
            </dl>
        </div>
        `;
    }
}
class PostsList {
    constructor() {
        this.element = document.createElement('ul');
        this.element.classList.add('posts-list');
        
        selectedUserService.onUserChanged(() => this.init());
        
    }

    async init() {
        this.element.innerHTML = '';
        this.posts = await this.fetchPosts();
        this.createList();
    }

    async fetchPosts(){
        let user = selectedUserService.user;
        let response = await fetch('https://jsonplaceholder.typicode.com/users/' + user.id +'/posts');
        return response.json();
    }

     createList() {
         this.posts.forEach(async post => {
            let li = await this.createPost(post);
            this.element.appendChild(li)

        });
    }

   async createPost(postData) {
        let post = new Post(postData);
        let li =  document.createElement('li');
        li.innerHTML = await post.displayPost();
        console.log(li.innerHTML)
        return li;
    }
}
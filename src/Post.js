class Post {
    constructor({title, body, id}) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
    

    async displayPost() {
        const comments = await this.fetchComments()
        let ul = document.createElement('ul');
        comments.forEach((comment) => {
            let li = document.createElement('li');
            let name = document.createElement('h4');
            let body = document.createElement('p');
            let email = document.createElement('span');
            name.innerText = comment.name;
            body.innerText = comment.body;
            email.innerText = comment.email;
            li.appendChild(name);
            li.appendChild(email);
            li.appendChild(body);
            ul.appendChild(li);
        })
        
        return  `
        <section>
            <h3>${this.title}</h3>
            <p>${this.body}</p>
            ${ul.outerHTML}
            
        </section>
        `
    }
    
    async fetchComments(){
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.id +'/comments');
        return response.json();
    }
}
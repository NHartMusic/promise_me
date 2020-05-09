const posts = [
    { title: 'Post One', body: 'This the first post, bruh' },
    { title: 'Post Two', body: 'And here is the second one, bruh bruh' }
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}



createPost({ title: 'Post Three', body: 'You thought we was done?' }, getPosts)
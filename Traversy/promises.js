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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false

            if (!error) {
                resolve()
            } else {
                reject('Uh Oh')
            }
        }, 2000)
    })
}

createPost({ title: 'Post Three', body: 'Invesitage 311' }).then(getPosts)


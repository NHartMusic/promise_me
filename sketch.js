let giphyAPI = 'https://api.giphy.com/v1/gifs/random?api_key=40UYsq6LhA7BqcqLHRwB0xO7AOSd6P8J&tag=&rating=G'

function setup() {

    fetch(giphyAPI)
        .then(data => console.log(data))
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

setup()
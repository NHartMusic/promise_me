function setup() {
    delay(2000)
        .then(() => alert('are you there god its me, 6ix9ine'))
        .catch((err) => console.log(err))
}

function delay(time) {
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {
            reject(new Error('that is not a number'))
        }

        setTimeout(resolve, time)
    })
}

function sayHello() {
    alert('Rat juice')
}


setup()
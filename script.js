// email validator api

submit.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log('clicked')
    rescont.innerHTML = `<img width="100" src="loader.svg" alt="" >`
    let email = document.getElementById('Email').value
    key = 'ema_live_0uiKdKsaPhUNmWkKY6dj7FSK3qGGbrJOAaLpHpu8'
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ''
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}:${result[key]}</div>`

        }

    }

    rescont.innerHTML = str

})

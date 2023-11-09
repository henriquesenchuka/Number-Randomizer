function clearNumber() {
    document.querySelector(".result").innerHTML = " ?"
}

function randomize() {

    const min = Math.ceil(document.querySelector('.between').value)
    const max = Math.floor(document.querySelector('.and').value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    document.querySelector(".result").innerHTML = result
}


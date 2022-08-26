import app from "./firebase/app.js"
import { subscribeTohellfireClub } from "./firebase/hellfire-club.js"
console.log(app)

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const isInputsFilled = IsInputsFilled(subscription)
    const isEmail = IsEmail(subscription.email)

    if (isInputsFilled && isEmail) {
        const subscriptionId = await subscribeTohellfireClub(subscription)
        console.log('Inscrito com sucesso: ' + subscriptionId)
    } else {
        alert('Digite um email válido')
    }
})

function IsEmail(email) {
    var validRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    if (validRegex.test(email)) {
        return true
    } else {
        return false
    }
}

function IsInputsFilled(subscription) {
    if (subscription.name == '')
        return false

    if (subscription.email == '')
        return false

    if (subscription.level == '')
        return false

    if (subscription.character == '')
        return false

    return true
}


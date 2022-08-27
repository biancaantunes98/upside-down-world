import app from "./firebase/app.js"
import { subscribeTohellfireClub } from "./firebase/hellfire-club.js"
console.log(app)

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const alertName = document.getElementById('alertName')
const alertEmail = document.getElementById('alertEmail')
const alertLevel = document.getElementById('alertLevel')
const alertCharacter = document.getElementById('alertCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

const formContainer = document.getElementById('formContainer')
const successMessage = document.getElementById('successMessage')

const btnNewSubscription = document.getElementById('btnNewSubscription')

btnSubscribe.addEventListener('click', async () => {
    debugger
    ClearAlerts()
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const isEmail = IsEmail(subscription.email)
    const isInputsFilled = IsInputsFilled(subscription)

    if (isInputsFilled && isEmail) {
        const subscriptionId = await subscribeTohellfireClub(subscription)
        ShowSuccessMessage()
        ClearInputs()
    }
})

function IsEmail(email) {
    var validRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    if (validRegex.test(email)) {
        return true
    } else {
        alertEmail.innerHTML = 'Digite um email válido'
        alertEmail.style.visibility = 'visible'
        return false
    }
}

function IsInputsFilled(subscription) {
    var isInputsFilled = true

    if (subscription.name == '') {
        alertName.style.visibility = "visible"
        isInputsFilled = false
    }

    if (subscription.email == '') {
        alertEmail.innerHTML = 'O campo email deve ser preenchido'
        alertEmail.style.visibility = "visible"
        isInputsFilled = false
    }

    if (subscription.level == '') {
        alertLevel.style.visibility = "visible"
        isInputsFilled = false
    }

    if (subscription.character == '') {
        alertCharacter.style.visibility = "visible"
        isInputsFilled = false
    }

    return isInputsFilled
}

function ClearInputs() {
    txtName.value = ""
    txtEmail.value = ""
    txtLevel.value = ""
    txtCharacter.value = ""
}

function ClearAlerts() {
    alertName.style.visibility = "hidden"
    alertEmail.style.visibility = "hidden"
    alertLevel.style.visibility = "hidden"
    alertCharacter.style.visibility = "hidden"
}

function ShowSuccessMessage() {
    formContainer.style.display = 'none'
    successMessage.style.display = 'inline'
}

btnNewSubscription.addEventListener('click', () => {
    successMessage.style.display = 'none'
    formContainer.style.display = 'inline'
})



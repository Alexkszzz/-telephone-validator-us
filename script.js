const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const resultDiv = document.getElementById("results-div")

const checkUserInput = () => {
    clearResult()
    const input = userInput.value
    if (input == "" || input == null) {
        alert("Please provide a phone number")
    }
    else {
        checkValidPhoneNumber(input) ? resultDiv.innerHTML += `Valid US number: ${input}` : resultDiv.innerHTML += `Invalid US number: ${input}`
        userInput.value = ""
    }
    return
}

const checkValidPhoneNumber = (str) => {
    var phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return phoneRegex.test(str);
}

const clearResult = () => {
    resultDiv.innerHTML = ""
}

checkBtn.addEventListener("click", checkUserInput)
clearBtn.addEventListener("click", clearResult)
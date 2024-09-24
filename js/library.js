function getInputValuById(id){
    const inputValue = document.getElementById(id).value;
    const inputMoneyNumber = parseFloat(inputValue)
    return inputMoneyNumber;
}

// for text value

function getTextValuById(id){
    const textValue = document.getElementById(id).innerText;
    const textMoneyNumber = parseFloat(textValue)
    return textMoneyNumber;
}
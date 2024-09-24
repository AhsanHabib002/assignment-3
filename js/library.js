function getInputValuById(id){
    const inputValue = document.getElementById(id).value;
    const inputMoneyNumber = parseFloat(inputValue)
    return inputMoneyNumber;
}
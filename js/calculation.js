// d-1
document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money1');
        console.log(donateMoney);
    })
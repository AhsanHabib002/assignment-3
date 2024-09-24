// d-1
document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money1');
        
        const balance = getTextValuById('account-balance');

        const donation = getTextValuById('get-money1')
        if(donateMoney <= balance){
            const newBalance = balance - donateMoney;

            const donateBalance = donation + donateMoney;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('get-money1').innerText = donateBalance;
        }

        else{
            alert('Not enough money')
        }
    })
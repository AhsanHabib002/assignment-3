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
// d-2

document.getElementById('donate-btn2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money2');
        
        const balance = getTextValuById('account-balance');

        const donation = getTextValuById('get-money2')
        if(donateMoney <= balance){
            const newBalance = balance - donateMoney;

            const donateBalance = donation + donateMoney;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('get-money2').innerText = donateBalance;
        }

        else{
            alert('Not enough money')
        }
    })

// d-3

document.getElementById('donate-btn3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateMoney = getInputValuById('donate-money3');
        
        const balance = getTextValuById('account-balance');

        const donation = getTextValuById('get-money3')
        if(donateMoney <= balance){
            const newBalance = balance - donateMoney;

            const donateBalance = donation + donateMoney;

            document.getElementById('account-balance').innerText = newBalance;
            document.getElementById('get-money3').innerText = donateBalance;
        }

        else{
            alert('Not enough money')
        }
    })

// toggle

document.getElementById('tg-donate')
    .addEventListener('click', function(){
        showSectionById('donate')
    })

    document.getElementById('tg-history')
    .addEventListener('click', function(){
        showSectionById('history')
    })

// active
document.getElementById('tg-donate')
    .addEventListener('click', function(){
        activeMode('tg-donate')
    })

    document.getElementById('tg-history')
    .addEventListener('click', function(){
        activeMode('tg-history')
    })
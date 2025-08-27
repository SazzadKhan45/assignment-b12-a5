// Coin balance function
function getNumberCovert(id){
    const coinNumberStr = document.getElementById(id).innerText;
    const coinNumber = parseInt(coinNumberStr);
    return coinNumber;
}

// Call button reuse function

function gatCallBtn(id1, id2){
    const totalCoinBalance = getNumberCovert('current-coin-balance');
    console.log(totalCoinBalance)
    // Call fee
    const callFree = 20;
    // ------------

    const serviceName = document.getElementById(id1).innerText;
    const serviceNumber = document.getElementById(id2).innerText;

    // ------------

    if (totalCoinBalance > 0) {
        alert(`
            ${serviceName}
            Calling  : ${serviceNumber}
            `)
        const coinBalance = totalCoinBalance - callFree;
        document.getElementById('current-coin-balance').innerText = coinBalance;
    }
    else {
        alert(`
                Your Cion Balance is : ${totalCoinBalance}
            `)
    }
    // 
    const callHistory = document.getElementById('call-history');


    const div = document.createElement('div');
    div.classList.add('mx-4', 'my-4', 'rounded-lg','p-4', 'bg-gray-100');


    // 
    const now = new Date();
    const localTime = now.toLocaleTimeString();

    div.innerHTML = `
    <p class ="text-lg font-medium">${serviceName}</p>
    <p class ="text-lg font-medium py-2">Call Number : ${serviceNumber}</p>
    <p>Calling time : ${localTime}</p>
`;

    callHistory.appendChild(div);
}
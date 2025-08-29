// Coin balance function
function getNumberCovert(id) {
    const coinNumberStr = document.getElementById(id).innerText;
    const coinNumber = parseInt(coinNumberStr);
    return coinNumber;
}

// Call button reuse function

function gatCallBtn(id1, id2) {
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
                Your Cion Balance is : ${totalCoinBalance}0
            `)
        return;
    }
    // 
    const callHistory = document.getElementById('call-history');


    const div = document.createElement('div');
    div.classList.add('mx-4', 'my-4', 'rounded-lg', 'p-4', 'bg-gray-100');


    //Time set up and Format 
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();

    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zero to minutes and seconds
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;


    // set a div

    div.innerHTML = `
    <div>
        <p class ="font-medium">${serviceName}</p>
        <p class ="py-2">Call Number : ${serviceNumber}</p>
    </div>
    <p>${hours}:${strMinutes} ${amPm}</p>
`;

    callHistory.appendChild(div);
};

// Count heart and copy 

function getCountValues(className) {
    const heartCountElement = document.getElementById(className);

    // Convert current text to number
    let totalHeart = parseInt(heartCountElement.textContent) || 0;

    // Increase count by 1
    totalHeart++;

    // Update the text
    heartCountElement.textContent = totalHeart;
};

// click copy btn copy the service number
function getServiceNumberCopy(id) {
    const number = document.getElementById(id).textContent.trim();
    navigator.clipboard.writeText(number);
}


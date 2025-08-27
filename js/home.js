// All services call
document.getElementById('all-services').addEventListener('click', function () {
    const totalCoinBalance = getNumberCovert('current-coin-balance');
    console.log(totalCoinBalance)
    // Call fee
    const callFree = 20;

    // Service name & number
    const serviceName = document.getElementById('national-emergency').innerText;
    const serviceNumber = document.getElementById('number999').innerText;

    // apply condition
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

    // call history add

    // const callHistory = document.getElementById('call-history');
    // console.log(callHistory);

    // const div = document.createElement('div');
    // const localTime = now.toLocaleTimeString();

    // div.innerHTML = `
    //     <p>${serviceName}</p>
    //     <p>${localTime}</p>
    // `;
    // callHistory.appendChild(div);

    const callHistory = document.getElementById('call-history');
    console.log(callHistory);

    const div = document.createElement('div');
    div.classList.add('mx-4', 'my-4', 'rounded-lg','p-4', 'bg-gray-100');


    // ✅ Define 'now' before using it
    const now = new Date();
    const localTime = now.toLocaleTimeString();

    // ✅ Example service name (you need to define this based on your context)
    div.innerHTML = `
    <p class ="text-lg font-medium mb-2">${serviceName}</p>
    <p>Calling time : ${localTime}</p>
`;

    callHistory.appendChild(div);




});









// hart count
document.querySelectorAll('.hart-icon').forEach(function (heart) {
    heart.addEventListener('click', function () {
        // Get the element that shows the count
        const heartCountElement = document.getElementById('heart-count');

        // Convert current text to number
        let totalHeart = parseInt(heartCountElement.textContent) || 0;

        // Increase count by 1
        totalHeart++;

        // Update the text
        heartCountElement.textContent = totalHeart;

        // Example: if you want to loop through all hearts
        const allHeartIcon = document.getElementsByClassName('hart-icon');
        let heartCountNumber = 0;

        for (let heartIcon of allHeartIcon) {
            // just counting how many hearts exist in DOM
            heartCountNumber++;
        }


    });
});

// Copy count number
document.querySelectorAll('.copy-cont-number').forEach(function (heart) {
    heart.addEventListener('click', function () {
        // console.log('Clicked')
        // Get the element that shows the count
        const heartCountElement = document.getElementById('copy-count');

        // Convert current text to number
        let totalHeart = parseInt(heartCountElement.textContent) || 0;

        // Increase count by 1
        totalHeart++;

        // Update the text
        heartCountElement.textContent = totalHeart;

        // Example: if you want to loop through all hearts
        const allHeartIcon = document.getElementsByClassName('copy-count');
        let heartCountNumber = 0;

        for (let heartIcon of allHeartIcon) {
            // just counting how many hearts exist in DOM
            heartCountNumber++;
        }

        // const callNumber = document.querySelectorAll('.call-number');
        // for (let number of callNumber) {
        //     const numberElement = number;
        //     const numberToCopy = numberElement.textContent.trim();
        //     console.log(numberToCopy)

        //     // 
        //     navigator.clipboard.writeText(numberToCopy).then(() => {
        //         // console.log("Copied number:", numberToCopy);
        //         // Optional: Show success message or paste somewhere
        //     }).catch(err => {
        //         console.error("Failed to copy:", err);
        //     });
        // }

        const cards = document.querySelectorAll('.card-number');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const numberElement = card.querySelector('.call-number');
                if (numberElement) {
                    const numberToCopy = numberElement.textContent.trim();
                    navigator.clipboard.writeText(numberToCopy).then(() => {
                        console.log(`Copied: ${numberToCopy}`);
                        // Optional: show a small toast or alert
                    }).catch(err => {
                        console.error("Failed to copy:", err);
                    });
                }
            });
        });



    });
});






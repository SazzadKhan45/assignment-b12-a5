// All services call
document.getElementById('all-services').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('national-emergency', 'number999');

});


// Ambulance Services
document.getElementById('ambulance-call').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('ambulance-number', 'number801944');

});

// FireService Emergency Number
document.getElementById('fire-service').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('fireService', 'number556622');

});

// Police Hotline Number
document.getElementById('police-hotline').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('police-service', 'number145');

});

// Bangladesh-Railway Number
document.getElementById('railway-service').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('railwayService', 'railway-number');

});

// NGo Emergency Number
document.getElementById('ngo-services').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('ngo-emergency', 'igo-call-number');

});



// Clear btn function add
document.getElementById('clear-btn').addEventListener('click', function () {
    const clearAllCallingHistory = document.getElementById('call-history')

    clearAllCallingHistory.innerHTML = '';

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






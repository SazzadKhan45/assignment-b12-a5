// All services call
document.getElementById('all-services').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('national-emergency', 'number999');

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

// Ambulance Services
document.getElementById('ambulance-call-btn').addEventListener('click', function () {

    // call reuse function
    gatCallBtn('ambulance-number', 'number801944');

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
        getCountValues('heart-count');

    });
});



// Copy count number
document.querySelectorAll('.copy-cont-number').forEach(function (heart) {
    heart.addEventListener('click', function () {
        // alert message
        alert('Increase the copy count');
        // call the function
        getCountValues('copy-count');

    });
});

// All services call number
document.getElementById('copy999').addEventListener('click', function () {
    getServiceNumberCopy('number999');

});

// FireService Emergency Number
document.getElementById('copy556622').addEventListener('click', function () {
    getServiceNumberCopy('number556622');

});

// Police Hotline Number
document.getElementById('copy04455').addEventListener('click', function () {
    getServiceNumberCopy('railway-number');

});

// Bangladesh-Railway Number
document.getElementById('copy014527').addEventListener('click', function () {
    getServiceNumberCopy('number145');

});

// NGo Emergency Number
document.getElementById('copy22114').addEventListener('click', function () {
    getServiceNumberCopy('igo-call-number');

});

// Ambulance Services number copy
document.getElementById('copy801944').addEventListener('click', function () {
    getServiceNumberCopy('number801944');

});






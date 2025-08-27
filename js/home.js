// hart count
document.querySelectorAll('.hart-icon').forEach(function(heart) {
    heart.addEventListener('click', function() {
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

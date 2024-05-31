document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    var confColor = document.getElementById('confirmation');

    confColor.style.display = 'none';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Simple validation
        if (name && email && phone && date && time) {
            // Simulate form submission (In a real scenario, you would send the data to a server)
            
            console.log('Booking Details:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Date:', date);
            console.log('Time:', time);
            confColor.style.display = 'block';
            form.reset();
            
            // Display a confirmation message to the user with 15 sec show time
            setTimeout(function() {
                confColor.style.display = 'none';
            }, 15000);
        } else {
            alert('Please fill in all fields.');
        }
    });
});//color id green #60d855
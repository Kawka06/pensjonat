document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;

    const bookingMessage = `Thank you, ${name}! Your booking for ${rooms} room(s) from ${checkin} to ${checkout} has been received. A confirmation email will be sent to ${email}.`;
    
    document.getElementById('bookingMessage').textContent = bookingMessage;
});

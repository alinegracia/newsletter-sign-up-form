const subscribeBtn = document.getElementById('subs-btn');

subscribeBtn.addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value;
    const isValid = /\S+@\S+\.\S+/.test(emailInput);

    if (!isValid) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        document.getElementById('email-input').style.color = 'var(--color3)';
        document.getElementById('email-input').style.border = '1px solid var(--color3)';

    } else {
        const userEmail = document.getElementById('email-input').value;
        const message = document.getElementById('message');
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('sign-up-container').style.display = 'none';
        document.getElementById('new-container').style.display = 'block';
        message.textContent = userEmail;
    }
})

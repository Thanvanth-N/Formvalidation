function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const errorMessages = [];
  
    if (name.trim() === '') {
      errorMessages.push('Name is required.');
    }
  
    if (email.trim() === '') {
      errorMessages.push('Email is required.');
    } else if (!isValidEmail(email)) {
      errorMessages.push('Please enter a valid email address.');
    }
  
    if (password.trim() === '') {
      errorMessages.push('Password is required.');
    }
  
    const errorMessagesDiv = document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML = '';
  
    if (errorMessages.length > 0) {
      errorMessages.forEach(message => {
        const p = document.createElement('p');
        p.innerText = message;
        errorMessagesDiv.appendChild(p);
      });
  
      return false; // Prevent form submission
    }
  
    return true; // Allow form submission
  }
  
  function isValidEmail(email) {
    // A simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
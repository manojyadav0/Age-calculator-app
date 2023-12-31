function calculateAge() {
    var birthdateString = document.getElementById('birthdate').value;
    if (!birthdateString) {
      alert('Please enter your birthdate.');
      return;
    }
    // Parse the input string into a Date object
    var birthdateObj = parseDate(birthdateString);
    if (!birthdateObj) {
      alert('Invalid date format. Please enter your birthdate in DD-MM-YYYY format.');
      return;
    }
    var today = new Date();
    var age = today.getFullYear() - birthdateObj.getFullYear();
    // Adjust age if birthday hasn't occurred yet this year
    if (today.getMonth() < birthdateObj.getMonth() || (today.getMonth() === birthdateObj.getMonth() && today.getDate() < birthdateObj.getDate())) {
      age--;
    }
    // Format the birthdate for display
    var formattedBirthdate = birthdateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('result').innerHTML = 'Your age is: ' + age + ' years. You were born on ' + formattedBirthdate;
  }
  // Function to parse a date string in the format 'DD-MM-YYYY' into a Date object
  function parseDate(dateString) {
    var parts = dateString.split('-');
    if (parts.length === 3) {
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10) - 1; // Months are zero-based
      var year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return null; 
  }
  
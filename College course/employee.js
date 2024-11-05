    var form = document.getElementById('employeeForm');
    var insurancePro = document.getElementById('insurancePro');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page from reloading after submission
        
        var maritalStatus = document.getElementById('maritalStatus').value;
        var age = parseInt(document.getElementById('age').value);
        var gender = document.getElementById('gender').value;
        var insuranceText = '';

        if (maritalStatus === 'married') {
            insuranceText = 'Insurance given';
        } else if (maritalStatus === 'single') {
            if (gender === 'male' && age < 35) {
                insuranceText = 'Insurance given';
            } else if (gender === 'female' && age < 30) {
                insuranceText = 'Insurance given';
            } else {
                insuranceText = 'No Insurance';
            }
        }
        // Display insurance info
        insurancePro.textContent = insuranceText;
    });

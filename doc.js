document.addEventListener('DOMContentLoaded', function() {
    const bloodTypeButtons = document.querySelectorAll('.blood-type');
    const medicalForm = document.getElementById('medical-form');
    const bloodTypeContainer = document.querySelector('.blood-type-container');

    bloodTypeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            bloodTypeButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');
            // Set the value of the selected blood type to a hidden input
            const bloodTypeInput = document.createElement('input');
            bloodTypeInput.type = 'hidden';
            bloodTypeInput.name = 'blood-type';
            bloodTypeInput.value = button.value;
            medicalForm.appendChild(bloodTypeInput);
        });
    });

    medicalForm.addEventListener('submit', function(event) {
        const selectedButton = bloodTypeContainer.querySelector('.active');
        if (!selectedButton) {
            event.preventDefault(); // Prevent form submission
            alert('Please select a blood type.');
        }
    });
});

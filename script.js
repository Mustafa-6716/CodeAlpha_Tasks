document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});

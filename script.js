document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Define valid credentials for admin, staff, and students
    const validCredentials = {
        'kascit': 'kascit@123',
        'kascps': 'kascit@123',
        'pshod': 'kascps@123',
        'staff': 'kascps@123',
        'student': 'kasc@123'
    };

    // Check if username and password are valid
    if (validCredentials[username] === password) {
        // Store username in localStorage
        localStorage.setItem('username', username);

        // Redirect based on username
        if (username === 'kascit' || username === 'kascps') {
            window.location.href = 'https://sankar2.onrender.com';
        } else if (username === 'pshod' || username === 'staff') {
            window.location.href = 'https://sankar-3n41.onrender.com/';
        } else if (username === 'student') {
            window.location.href = 'https://college-dkzx.onrender.com/';
        }
    } else {
        // Display error message if credentials are invalid
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});

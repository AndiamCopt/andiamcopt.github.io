// Firebase App and Authentication are already initialized in the HTML file

// Reference to the form elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add event listener to the login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Sign in with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            alert('Login successful!');
            // You can redirect or update the UI as needed
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});

// Reference to the signup form elements
const signupForm = document.getElementById('signup-form');
const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');

// Add event listener to the signup form
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;

    // Sign up with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert('Sign-up successful!');
            // You can redirect or update the UI as needed
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});

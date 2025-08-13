import greet, { add, multiply } from './mathUtils.js';

// Run default export
greet("Priya");

// Example usage of named exports
console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 6));

// Form functionality
window.onload = function() {
    alert("Welcome to the Workshop Sign-up Page!");
};

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let topic = document.getElementById("topic").value;
    let experience = document.getElementById("experience").value;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (!name || !email || !phone || !topic || !experience) {
        alert("Please fill in all fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }

    alert("Registration Successful!");
    this.reset();
});

// Fixed colors array (removed syntax error)
const colors = [
    "#57eb0dff", // green
    "#f00db7ff", // pink
    "#57e7faff", // light blue
    "#fb0606ff", // red
    "#f7f707ff", // yellow
    "#0707f4ff", // blue
    "#010b0cff"  // dark navy
];
let colorIndex = 0;

document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // loop colors
});

// Create Card functionality
const cardContainer = document.getElementById("cardContainer");
document.getElementById("createCardBtn").addEventListener("click", function() {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <p>How Can I help You ?? :)</p>
        <button class="delete-btn">Delete</button>
    `;

    card.querySelector(".delete-btn").addEventListener("click", function() {
        card.remove();
    });

    cardContainer.appendChild(card);
});

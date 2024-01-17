// Function to show the modal
function showModal() {
    document.getElementById('overlay').style.display = 'flex';
}

// Function to hide the modal
function hideModal() {
    document.getElementById('overlay').style.display = 'none';
}

// Show the modal on page load
window.onload = function() {
    showModal();
};

// Attach click event to the close button
document.getElementById('closeButton').addEventListener('click', function() {
    hideModal();
});


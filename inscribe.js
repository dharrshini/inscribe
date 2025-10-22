// READ/WRITE TOGGLE BUTTON
const toggleButton = document.getElementById('toggleMode');
let isReadMode = true;

toggleButton.addEventListener('click', () => {
    isReadMode = !isReadMode;
    toggleButton.textContent = isReadMode ? 'Read' : 'Write';
    toggleButton.classList.toggle('active', isReadMode);
    toggleButton.classList.toggle('inactive', !isReadMode);

    // Optional: implement mode-specific logic here
    // e.g., show/hide sections depending on the mode
});

// PROFILE DROPDOWN MENU
const profilePic = document.getElementById('profilePic');
const dropdownMenu = document.getElementById('dropdownMenu');
let isDropdownOpen = false;

// Toggle dropdown visibility when clicking profile picture
profilePic.addEventListener('click', () => {
    isDropdownOpen = !isDropdownOpen;
    dropdownMenu.style.display = isDropdownOpen ? 'block' : 'none';
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const isClickInside = document.querySelector('.profile-wrapper').contains(event.target);
    if (!isClickInside) {
        dropdownMenu.style.display = 'none';
        isDropdownOpen = false;
    }
});

// LOGOUT FUNCTIONALITY
const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("isLoggedIn");

    // Optional: redirect to login page or homepage
    window.location.href = "login.html"; // or change to "index.html" if needed
});

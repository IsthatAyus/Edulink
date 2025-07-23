// Function to show feature details
function showFeature(feature) {
    const messages = {
        connections: "You have 12 active connections! Click to manage your network.",
        marketplace: "You have 5 items listed in the marketplace. Click to manage your listings.",
        events: "You have 3 upcoming events. Click to view your event calendar.",
        faculty: "You have 8 faculty contacts. Click to view contact details."
    };
    alert(messages[feature] || "Feature coming soon!");
}

// Function to show activity details
function showActivity(activity) {
    const messages = {
        book: "📚 Advanced Mathematics textbook listed for Rs. 500. Contact library for details.",
        skill: "🎯 Found 3 Python developers in your area. Connect with them now!",
        event: "📅 Tech Workshop: 'AI in Modern Development' - Register now!",
        faculty: "👨‍🏫 Roshan Nyupane is available Mon-Wed 2-4 PM. Book an appointment."
    };
    alert(messages[activity] || "Activity details coming soon!");
}



// Function to handle quick actions
function quickAction(action) {
    const messages = {
        post: "📝 Create a new post - Feature coming soon!",
        sell: "💰 List an item for sale - Feature coming soon!",
        connect: "🤝 Find new connections - Feature coming soon!",
        schedule: "📅 Schedule a meeting - Feature coming soon!"
    };
    alert(messages[action] || "Quick action coming soon!");
}


// Add some interactive animations
document.addEventListener('DOMContentLoaded', function () {
    // Add staggered animation to stat cards
    const statCards = document.querySelectorAll('.stats div');
    statCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeIn 0.5s ease forwards';
    });

    // Add pulse animation to notification panel
    const notificationPanel = document.querySelector('.notifications');
    if (notificationPanel) {
        setInterval(() => {
            notificationPanel.style.boxShadow = '0 0 20px rgba(0, 122, 204, 0.2)';
            setTimeout(() => {
                notificationPanel.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
            }, 1000);
        }, 10000);
    }
});

// Add CSS animation keyframes
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

// Event listeners for interactivity
document.querySelectorAll('.stats div').forEach(div => {
    div.addEventListener('click', () => showFeature(div.textContent.split('\n')[1].trim().toLowerCase()));
});

document.querySelectorAll('.activity ul li').forEach(li => {
    li.addEventListener('click', () => {
        const activity = li.querySelector('span').textContent.trim();
        showActivity(activity.toLowerCase().replace('👨‍🏫', 'faculty').replace('📅', 'event').replace('🎯', 'skill').replace('📚', 'book'));
    });
});



document.querySelectorAll('.quick-actions button').forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent.trim().toLowerCase().replace('📝', 'post').replace('💰', 'sell').replace('🤝', 'connect').replace('📅', 'schedule');
        quickAction(action);
    });
});

// Only handle logout with JS, let other links work normally
document.getElementById('logoutBtn').addEventListener('click', function (e) {
    e.preventDefault();
    // localStorage.clear(); // or remove only login info
    window.location.href = '../index.html';
});

// Helper function to format date (copied from login.js for consistency)
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}

document.addEventListener("click", function (e) {
    const navbar = document.getElementById("navbar");
    const menuToggle = document.querySelector(".menu-toggle");

    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove("show");
    }
});

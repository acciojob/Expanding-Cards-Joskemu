//your JS code here. If required.
// Select all panels
const panels = document.querySelectorAll('.panel');

// Add event listener to each panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // Remove active class from all panels
        panels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked panel
        panel.classList.add('active');
    });
});

// Set default active panel (first one)
document.getElementById('panel-1').classList.add('active');

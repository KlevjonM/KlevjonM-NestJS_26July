document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Turn on Light Mode';
        } else {
            modeToggle.textContent = 'Turn on Dark Mode';
        }
    });
});
const themeToggle = document.querySelector('#theme-btn');
const savedTheme = localStorage.getItem('theme');

function setTheme(theme) {
    const isDark = theme === 'dark';

    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = isDark
        ? 'Switch to light theme'
        : 'Switch to dark theme';
}

setTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark'
        ? 'light'
        : 'dark';

    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
});
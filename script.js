// Aplicar o tema baseado na preferência do sistema ou no localStorage
function applyPreferredTheme() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        if (storedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.add('light-theme');
        }
    } else if (prefersDarkScheme) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

// Aplicar tema automaticamente ao carregar a página
window.onload = applyPreferredTheme;

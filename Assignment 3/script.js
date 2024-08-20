document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const container = document.querySelector('.container');
    const text = document.getElementById('text');

    let isChanged = false;

    button.addEventListener('click', () => {
        if (isChanged) {
            // Revert to initial state
            container.classList.remove('changed');
            container.classList.add('initial');
            button.classList.remove('changed');
            button.classList.add('initial');
            button.textContent = 'Change';
            text.textContent = 'Initial Text';
        } else {
            // Change to new state
            container.classList.remove('initial');
            container.classList.add('changed');
            button.classList.remove('initial');
            button.classList.add('changed');
            button.textContent = 'Revert';
            text.textContent = 'Changed Text';
        }
        isChanged = !isChanged;
    });
});
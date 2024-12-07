const input = document.getElementById('countryInput');
const countryList = document.getElementById('countryList');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        const country = input.value.trim();

        if (countryList.textContent === 'Список країн:') {
            countryList.textContent += ` ${country}`;
        } else {
            countryList.textContent += `, ${country}`;
        }

        input.value = '';
    }
});
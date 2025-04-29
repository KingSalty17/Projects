
let selectedPOC = null;


function setupPOCSearch() {
    const searchInput = document.getElementById('pocSearch');
    searchInput.addEventListener('input', debounce(handlePOCSearch, 300));
}

function handlePOCSearch(e) {
    const term = e.target.value.toLowerCase();
    const results = pocList.filter(poc => 
        `${poc.firstName} ${poc.lastName}`.toLowerCase().includes(term) ||
        poc.position.toLowerCase().includes(term)
    );

    const resultsContainer = document.getElementById('pocResults');
    resultsContainer.innerHTML = '';
    
    results.forEach(poc => {
        const div = document.createElement('div');
        div.className = 'poc-result';
        div.innerHTML = `
            <strong>${poc.firstName} ${poc.lastName}</strong>
            <div>${poc.position} @ ${poc.organization}</div>
        `;
        div.addEventListener('click', () => selectPOC(poc));
        resultsContainer.appendChild(div);
    });

    resultsContainer.style.display = results.length ? 'block' : 'none';
}

function selectPOC(poc) {
selectedPOC = poc;
document.getElementById('pocResults').style.display = 'none';
document.getElementById('selectedPOC').style.display = 'block';

const detailsDiv = document.getElementById('pocDetails');
detailsDiv.innerHTML = '';

// Dynamically add only available fields
const fields = [
{ label: 'POC', value: `${poc.firstName} ${poc.lastName} | ${poc.position} | ${poc.organization} | ${poc.address} | ${poc.phone} |  ${poc.email} ` }

];

fields.forEach(field => {
if (field.value && field.value !== 'N/A') {
    const fieldElement = document.createElement('p');
    fieldElement.innerHTML = `<strong>${field.label}:</strong> ${field.value}`;
    detailsDiv.appendChild(fieldElement);
}
});
}

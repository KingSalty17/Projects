
let selectedTemplate = null;

function setupTemplateSearch() {
    const searchInput = document.getElementById('templateSearch');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const categories = document.querySelectorAll('.template-category');

        categories.forEach(category => {
            const templates = category.querySelectorAll('.template-card');
            let hasVisibleTemplates = false;

            templates.forEach(template => {
                const templateText = template.textContent.toLowerCase();
                if (templateText.includes(searchTerm)) {
                    template.style.display = 'block';
                    hasVisibleTemplates = true;
                } else {
                    template.style.display = 'none';
                }
            });

            // Show or hide the category based on whether it has visible templates
            category.style.display = hasVisibleTemplates ? 'block' : 'none';
        });
    });
}


function selectTemplate(templateKey) {
    selectedTemplate = templateKey;

    // Check if the selected template is part of the Private Sector Templates
    const privateSectorTemplates = ['privateRelocation', 'chamberRelocation'];
    const pocSearchContainer = document.querySelector('.poc-search-container');
    const selectedPOCContainer = document.getElementById('selectedPOC');

    if (privateSectorTemplates.includes(templateKey)) {
        // Hide POC search bar and selected POC details
        pocSearchContainer.style.display = 'none';
        selectedPOCContainer.style.display = 'none';
        selectedPOC = null; // Clear any previously selected POC
    } else {
        // Show POC search bar for other templates
        pocSearchContainer.style.display = 'block';
    }

    // Generate the form fields for the selected template
    createFormFields(templateKey);
}
function updateCopyButtonVisibility() {
    const outputPreview = document.getElementById('outputPreview');
    const copyButton = document.querySelector('.copy-btn');

    // Show the button only if there is text in the outputPreview
    if (outputPreview.innerHTML.trim()) {
        copyButton.style.display = 'inline-block';
    } else {
        copyButton.style.display = 'none';
    }
}

        function copyOutput() {
    const outputPreview = document.getElementById('outputPreview');
    const tempElement = document.createElement('div');
    tempElement.innerHTML = outputPreview.innerHTML;

    // Extract plain text, including bold text
    const textToCopy = tempElement.innerText;

    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Output copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    } else {
        alert('No content to copy!');
    }
}

        function clearOutput() {
    const outputPreview = document.getElementById('outputPreview');
    const copyButton = document.querySelector('.copy-btn');
    const clearButton = document.querySelector('.clear-btn');

    // Clear the content of outputPreview
    outputPreview.innerHTML = '';

    // Hide the buttons
    copyButton.style.display = 'none';
    clearButton.style.display = 'none';
}

        function updateCopyButtonVisibility() {
    const outputPreview = document.getElementById('outputPreview');
    const copyButton = document.querySelector('.copy-btn');
    const clearButton = document.querySelector('.clear-btn');

    // Show the buttons only if there is text in the outputPreview
    if (outputPreview.innerHTML.trim()) {
        copyButton.style.display = 'inline-block';
        clearButton.style.display = 'inline-block';
    } else {
        copyButton.style.display = 'none';
        clearButton.style.display = 'none';
    }
}

// Helper functions remain the same
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function getPlaceholders(template) {
    return [...new Set(template.match(/\[(.*?)\]/g).map(p => p.slice(1, -1)))];
}

function formatLabel(text) {
    return text.replace(/([A-Z])/g, ' $1').replace(/\b\w/g, l => l.toUpperCase());
}

function formatTemplateName(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
}

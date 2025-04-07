// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const textElement = document.getElementById('textToChange');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const styleBtn = document.getElementById('styleBtn');
    const addRemoveBtn = document.getElementById('addRemoveBtn');
    const dynamicContent = document.getElementById('dynamicContent');
    let elementAdded = false;

    // Function to change text content
    function updateText() {
        textElement.textContent = 'New text at ' + new Date().toLocaleTimeString();
    }

    // Function to modify CSS styles
    function toggleStyle() {
        textElement.classList.toggle('highlight');
    }

    // Function to add/remove element
    function manageElement() {
        if (!elementAdded) {
            // Create new element
            const newPara = document.createElement('p');
            newPara.textContent = 'This is an added paragraph.';
            newPara.id = 'dynamicPara';
            dynamicContent.appendChild(newPara);
            elementAdded = true;
            addRemoveBtn.textContent = 'Remove Element';
        } else {
            // Remove element
            const paraToRemove = document.getElementById('dynamicPara');
            paraToRemove.remove();
            elementAdded = false;
            addRemoveBtn.textContent = 'Add Element';
        }
    }

    // Event listeners for user interactions
    changeTextBtn.addEventListener('click', updateText);
    styleBtn.addEventListener('click', toggleStyle);
    addRemoveBtn.addEventListener('click', manageElement);
});
// Test page JavaScript
console.log('Test page JavaScript loaded successfully');

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Test page DOM fully loaded');
    
    const testButton = document.getElementById('testButton');
    const testInput = document.getElementById('testInput');
    const resultDiv = document.getElementById('result');
    
    if (testButton && testInput && resultDiv) {
        console.log('All test elements found');
        
        testButton.addEventListener('click', function() {
            console.log('Test button clicked');
            const inputValue = testInput.value;
            if (inputValue.trim() === '') {
                resultDiv.textContent = 'Please enter some text!';
            } else {
                resultDiv.textContent = `You entered: ${inputValue}`;
            }
        });
    } else {
        console.error('Some test elements not found:', {
            testButton: !!testButton,
            testInput: !!testInput,
            resultDiv: !!resultDiv
        });
    }
}); 
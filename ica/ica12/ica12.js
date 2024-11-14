// Define the API endpoint for the cat fact
const apiEndpoint = 'https://catfact.ninja/fact';

// Grab the elements from the HTML
const factDisplay = document.getElementById('factDisplay');
const factButton = document.getElementById('factButton');

factButton.addEventListener('click', getFact);

function getFact() {
    console.log('Button clicked! Fetching a cat fact...');

    // Make the API request using fetch
    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                
                throw new Error('Error');
            }
            return response.json();  
        })
        .then(data => {
            
            console.log('Cat Fact:', data.fact);

            displayRes(data.fact);
        })
       
}


function displayRes(fact) {
    factDisplay.textContent = fact; 
}

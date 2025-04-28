// Get the input element, button element, tasks container and task element
const input = document.querySelector('input');
const button = document.querySelector('button');

// Add an event listener to the button, which will be triggered when the button is clicked
button.addEventListener('click', () => {
    // Create a new list item element
    const newTask = document.createElement('li');
    
    // Set the text content of the new list item to the value of the input element
    newTask.textContent = input.value;
    
    // Add the new list item to the tasks container
    tasks.appendChild(newTask);
    
    // Clear the input element
    input.value = '';
});


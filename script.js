import { handleFormSubmit, handleDOMLoad } from './CRUD-funcs.js';
import { getLocation } from './weather.js';

//create event listener for onDOM load - GET request.
document.addEventListener('DOMContentLoaded', () => {
    handleDOMLoad();
    getLocation();
    
})

//on Form submit: grab and store user input to mongoDB
const taskForm = document.querySelector('#todosInput_form');
taskForm.addEventListener("submit", handleFormSubmit)


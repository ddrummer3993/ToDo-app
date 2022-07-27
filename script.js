
//create event listener for onDOM load - GET request.

//on Form submit: grab and store user input to mongoDB
const taskForm = document.querySelector('todosInput_form');
taskForm.addEventListener("submit", handleFormSubmit)


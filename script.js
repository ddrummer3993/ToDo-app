
//create event listener for onDOM load - GET request.
document.addEventListener('DOMContentLoaded', () => {
    handleDOMLoad();
})

//on Form submit: grab and store user input to mongoDB
const taskForm = document.querySelector('todosInput_form');
taskForm.addEventListener("submit", handleFormSubmit)


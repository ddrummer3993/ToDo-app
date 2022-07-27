
//Heroku API URL
const URL = 'https://todo-app-api-dd.herokuapp.com/toDo'

//handleFormSubmit function: handles the form submit and send a CREATE/POST to back end via fetch request
export function handleFormSubmit(eventObj) {
    eventObj.preventDefault();

    let itemNumber = document.querySelector(/* GET ID FORM NEW INPUT */).value;
    let taskName = document.querySelector('#to_dos').value; 
    // TODO - CHANGE ID VALUE ON TASK INPUT

    let newEntry = {
        itemNum: itemNumber,
        task: taskName
    }

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

};

//handleDOMLoad function: handles the READ/GET request to back end at the DOM load to load the inital daily todo list
export function handleDOMLoad() {
    return fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
}

//handleTaskEdit function: handles UPDATE/PUT request to back end to update a current ToDo task on the list
export function handleTaskEdit() {
    //TODO - find way to prompt user for edit changes, grab those changes via ID's. also grab the tasks itemNum
    itemNumber = '1';

    //TODO - make new obj using user inputs
    
    let updatedEntry = {}

    fetch(URL + `/${itemNumber}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedEntry)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    });
    
}

//handleTaskDelete function: handles DELETE/DELETE request to back end when the delete task button is clicked on a specific task.
export function handleTaskDelete() {
    //TODO - upon clicking the delete button on spcific task, grab that tasks itemNum;

    itemNumber = '1';

    fetch(URL + `/${itemNumber}`, {
        method: 'DELETE'
    });

    return mockDBDelete;
}
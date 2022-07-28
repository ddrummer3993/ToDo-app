import { createTask } from './create-card.js';

//Heroku API URL
const URL = 'https://todo-app-api-dd.herokuapp.com/toDo'

//handleFormSubmit function: handles the form submit and send a CREATE/POST to back end via fetch request
export function handleFormSubmit(eventObj) {
    eventObj.preventDefault();

    //TODO - decide on how to prioritize tasks, use that in newEntry variable

    //let itemNumber = document.querySelector(/* GET ID FroM NEW INPUT */).value;
    let taskName = document.querySelector('#userInput').value; 

    let newEntry = {
        //itemNum: itemNumber,
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
        let entryID = data.insertedId;
        newEntry._id = entryID;
        createTask(newEntry);
    })
};

//handleDOMLoad function: handles the READ/GET request to back end at the DOM load to load the inital daily todo list
export function handleDOMLoad() {
    return fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        //TODO - put in priority order function
        console.log(data);
        data.forEach(taskObj => createTask(taskObj))
    });
};

//handleTaskEdit function: handles UPDATE/PUT request to back end to update a current ToDo task on the list
export function handleTaskEdit(taskID, updatedtask) {
    
    let updatedEntry = {
        task: updatedtask
    }

    fetch(URL + `/${taskID}`, {
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
};

//handleTaskDelete function: handles DELETE/DELETE request to back end when the delete task button is clicked on a specific task.
export function handleTaskDelete(taskID) {
    //TODO - upon clicking the delete button on spcific task, grab that tasks itemNum;

    fetch(URL + `/${taskID}`, {
        method: 'DELETE'
    });
};
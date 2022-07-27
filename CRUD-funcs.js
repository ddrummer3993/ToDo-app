
//handleFormSubmit function: handles the form submit and send a CREATE/POST to back end via fetch request
function handleFormSubmit() {
    const mockDBPost = [
        {
          _id: new ObjectId("62e01f56bda792975615b384"),
          itemNum: '1',
          task: 'Take out the trash'
        },
        {
          _id: new ObjectId("62e01f75bda792975615b385"),
          itemNum: '2',
          task: 'Do the dishes'
        },
        {
          _id: new ObjectId("62e024c6c3d340a0d117c066"),
          itemNum: '3',
          task: 'Mop the Floor'
        },
        {
          _id: new ObjectId("62e02a3d122c868893c73cca"),
          itemNum: '4',
          task: 'take a nap'
        },
        {
            _id: new ObjectId("2809nfjow9938nf9f9v009"),
          itemNum: '5',
          task: 'Wash the car'
        }
    ];

    return mockDBPost;
};

//handleDOMLoad function: handles the READ/GET request to back end at the DOM load to load the inital daily todo list
function handleDOMLoad() {
    const mockDB = [
        {
          _id: new ObjectId("62e01f56bda792975615b384"),
          itemNum: '1',
          task: 'Take out the trash'
        },
        {
          _id: new ObjectId("62e01f75bda792975615b385"),
          itemNum: '2',
          task: 'Do the dishes'
        },
        {
          _id: new ObjectId("62e024c6c3d340a0d117c066"),
          itemNum: '3',
          task: 'Mop the Floor'
        },
        {
          _id: new ObjectId("62e02a3d122c868893c73cca"),
          itemNum: '4',
          task: 'take a nap'
        }
    ];

    return mockDB;
}

//handleTaskEdit function: handles UPDATE/PUT request to abck end to update a current ToDo task on the list
function handleTaskEdit() {
    const mockDBEdit = [
        {
          _id: new ObjectId("62e01f56bda792975615b384"),
          itemNum: '1',
          task: 'Take out the trash'
        },
        {
          _id: new ObjectId("62e01f75bda792975615b385"),
          itemNum: '2',
          task: 'Do the dishes'
        },
        {
          _id: new ObjectId("62e024c6c3d340a0d117c066"),
          itemNum: '3',
          task: 'Mop the Floor'
        },
        {
          _id: new ObjectId("62e02a3d122c868893c73cca"),
          itemNum: '4',
          task: 'Wash the car'
        }
    ];

    return mockDBEdit;
}

//handleTaskDelete function: handles DELETE/DELETE request to back end when the delete task button is clicked on a specific task.
function handleTaskDelete() {
    const mockDBDelete = [
        {
          _id: new ObjectId("62e01f56bda792975615b384"),
          itemNum: '1',
          task: 'Take out the trash'
        },
        {
          _id: new ObjectId("62e01f75bda792975615b385"),
          itemNum: '2',
          task: 'Do the dishes'
        },
        {
          _id: new ObjectId("62e024c6c3d340a0d117c066"),
          itemNum: '3',
          task: 'Mop the Floor'
        }
    ];

    return mockDBDelete;
}
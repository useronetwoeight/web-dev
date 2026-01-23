console.log("works");

let todosArray = [];
let nextId = 1;

function addOne(task, boolean, due) { // takes input and makes it into usable data for other functions
    if (!task || !due) {
        return false;
    }

    const newTask = {
        id: nextId++,
        task,
        boolean,
        due
    };

    taskArray.push(newTask);
    return newTask; }


function getAll() { 
    return todosArray; }

if (require.main === module) {
    console.log("getAll called:", getAll()); 
}

function findById(id) { // id input -> number -> matches id -> found?
    const task_id = Number(id); 
    const task = taskArray.find(item => item.id === task_id); 
    return task || false; // if no id -> false
}

function updateOneById(id, updatedData) { // change inputted data
    const car = findById(id);
    if (car) {
        if (updatedData.task) car.task = updatedData.task;
        if (updatedData.boolean) car.boolean = updatedData.boolean;
        if (updatedData.due) car.due = updatedData.due;
        return car; 
    }
    return false; // if no id -> false
}

function deleteOneById(id) { // matches id then checks if deleted
    const car = findById(id);
    if (car) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(car => car.id !== Number(id)); 
        return todosArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // if no id -> false

}

const ToDos = {
    getAll, addOne, findById, updateOneById, deleteOneById };
module.exports = ToDos;
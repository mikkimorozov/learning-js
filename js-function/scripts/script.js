//Create a variable

var todos = ['item 1', 'item 2', 'item 3'];

//Function that display todos

function displayTodos() {
    console.log('My todos:', todos);
}


//Create a function with todo parameter

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}


//Function thats change todos 

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}


//Function thats delete todos 

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
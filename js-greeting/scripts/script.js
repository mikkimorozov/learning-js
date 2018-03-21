//Creates a place to store todos

var todos =  ['item 1', 'item 2', 'item 3'];

//Change second item in todo list

todos[1] = 'item 2 updated';

//Show updated second item in console

console.log('My second item:',todos[1]);

//Add new item

todos.push('item 4');

//Delete a first item (1 means - 1 item)

todos.splice(0, 1);

//Shows finished todo in alert

alert(todos);


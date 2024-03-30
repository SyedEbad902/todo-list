import inquirer from 'inquirer';
let todos = [];
let userAdditem = await inquirer.prompt([{
        message: "Enter value to add in todo list",
        type: 'input',
        name: "todoItems"
    },
]);
todos.push(userAdditem.todoItems);
console.log(todos);
let a = true;
while (a) {
    let userAddMore = await inquirer.prompt([{
            message: "You want to add more items in list",
            type: "string",
            name: "moreItems",
        }]);
    if (userAddMore.moreItems == 'y' || userAddMore.moreItems == 'Y') {
        userAdditem = await inquirer.prompt([{
                message: "Enter value to add in todo list",
                type: 'input',
                name: "todoItems"
            },
        ]);
        todos.push(userAdditem.todoItems);
        console.log(todos);
    }
    else {
        console.log("Your current todos are:");
        console.log(todos);
        a = false;
    }
}
// if (userAddMore.moreItems == 'y' ||userAddMore.moreItems == 'Y' ) {
//     let a = true;
// while (a) {
//     let userAdd = await inquirer.prompt([{
//         message: "Enter value to add in todo list",
//         type: 'input',
//         name: "Items"
//     }])
//     todos.push(userAdd.Items);
//     console.log(todos);
//     userAddMore = await inquirer.prompt([ {
//      message: "You want to add more items in list",
//     type: "string",
//     name: "moreItems",
// }])
// }
// }

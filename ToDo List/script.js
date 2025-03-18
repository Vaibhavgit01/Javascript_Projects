const todolists = document.querySelector(".todolists");
const listvalue = document.querySelector(".todotask");
let todoListValue = [];


const getTodoListFromLS = () => {
    return JSON.parse(localStorage.getItem("todo")) || [];
}
const addTodoListLocalStorage = (todo) => {
    return localStorage.setItem("todo", JSON.stringify(todo));
};
const ShowTodoList = () => {
    todoListValue = getTodoListFromLS();
    // console.log(todoListValue);
    todoListValue.forEach((newtodo) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = newtodo;
        todolists.append(liElement);
    });
}
///////////////remove function making
const removeTodoList = (e) => {
    console.log(e.target.textContent);
    console.log(todoListValue);

    updatedTodoList = todoListValue.filter((curtodo) => curtodo !== e.target.textContent);
    console.log(updatedTodoList);

    addTodoListLocalStorage(updatedTodoList);
    e.target.remove();
}    

const addTodoList = (e) => {
    e.preventDefault();
    // for testig
    // console.log("dik rha ha na");
    todoListValue = getTodoListFromLS();
    let newTodo = listvalue.value.trim();
    console.log(newTodo);

    listvalue.value = ""; /////////////this is used for remove the data from input box after data save
    if (newTodo.length != 0 && !todoListValue.includes(newTodo)) {
        console.log(typeof todoListValue)
        todoListValue.push(newTodo);


        addTodoListLocalStorage(todoListValue);
        const liElement = document.createElement("li");
        liElement.innerHTML = newTodo;
        todolists.append(liElement);
    }

};

ShowTodoList();


document.querySelector(".add_butt").addEventListener("click", (e) => {
    addTodoList(e);
})

////////////////this function useing to remove the data from local storage
todolists.addEventListener("click", (e) => removeTodoList(e));
